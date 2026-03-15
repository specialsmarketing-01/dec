import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const SMTP = {
  host: 'mail.decnox.com',
  port: 465,
  secure: true,
  user: 'office@decnox.com',
  from: '"DECNOX Website" <office@decnox.com>',
};

const HONEYPOT_FIELD = 'website'; // hidden field; bots fill it

function escapeHtml(text) {
  if (typeof text !== 'string') return '';
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

function isValidEmail(value) {
  if (typeof value !== 'string') return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(value.trim());
}

export async function POST(request) {
  try {
    const body = await request.json();

    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';
    const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
    const honeypot = body[HONEYPOT_FIELD];

    if (honeypot) {
      return NextResponse.json(
        { success: true, message: 'Message sent successfully' },
        { status: 200 }
      );
    }

    if (!name) {
      return NextResponse.json(
        { success: false, message: 'Name is required.' },
        { status: 400 }
      );
    }
    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required.' },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }
    if (!message) {
      return NextResponse.json(
        { success: false, message: 'Message is required.' },
        { status: 400 }
      );
    }

    const emailPass = process.env.EMAIL_PASS;
    if (!emailPass) {
      console.error('[Contact API] EMAIL_PASS environment variable is not set. Add it to .env.local');
      return NextResponse.json(
        { success: false, message: 'Server email configuration is missing. Add EMAIL_PASS to .env.local and restart the dev server.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP.host,
      port: SMTP.port,
      secure: SMTP.secure,
      auth: {
        user: SMTP.user,
        pass: emailPass,
      },
    });

    const htmlBody = [
      '<p><strong>Name:</strong> ' + escapeHtml(name) + '</p>',
      '<p><strong>Email:</strong> ' + escapeHtml(email) + '</p>',
      ...(phone ? ['<p><strong>Phone:</strong> ' + escapeHtml(phone) + '</p>'] : []),
      '<p><strong>Message:</strong></p>',
      '<p>' + escapeHtml(message).replace(/\n/g, '<br>') + '</p>',
    ].join('');

    const textBody = [
      `Name: ${name}`,
      `Email: ${email}`,
      ...(phone ? [`Phone: ${phone}`] : []),
      '',
      'Message:',
      message,
    ].join('\n');

    await transporter.sendMail({
      from: SMTP.from,
      to: SMTP.user,
      replyTo: email,
      subject: 'New Website Contact Message',
      text: textBody,
      html: htmlBody,
    });

    const autoReplyHtml = [
      '<p>Hello ' + escapeHtml(name) + ',</p>',
      '<p>Thank you for contacting Decnox.</p>',
      '<p>We received your message and our team will get back to you shortly.</p>',
      '<p>Best regards,<br>Decnox Team</p>',
    ].join('');

    const autoReplyText = [
      `Hello ${name},`,
      '',
      'Thank you for contacting Decnox.',
      'We received your message and our team will get back to you shortly.',
      '',
      'Best regards',
      'Decnox Team',
    ].join('\n');

    await transporter.sendMail({
      from: SMTP.from,
      to: email,
      replyTo: SMTP.user,
      subject: 'Thank you for contacting Decnox',
      text: autoReplyText,
      html: autoReplyHtml,
    });

    return NextResponse.json(
      { success: true, message: 'Your message has been sent successfully. We will contact you soon.' },
      { status: 200 }
    );
  } catch (err) {
    const errMsg = err.message || 'Unknown error';
    const errCode = err.code || '';
    const errResponse = err.response ? String(err.response).slice(0, 200) : '';
    console.error('[Contact API] Send mail failed:', errMsg, errCode, errResponse);
    return NextResponse.json(
      { success: false, message: errMsg + (errCode ? ` (${errCode})` : '') },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json(
    { success: false, message: 'Method not allowed' },
    { status: 405 }
  );
}
