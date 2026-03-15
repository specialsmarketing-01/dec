import nodemailer from 'nodemailer';

export const config = {
    api: {
        bodyParser: true,
    },
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    const body = req.body || {};
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';
    const phone = typeof body.phone === 'string' ? body.phone.trim() : '';

    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: 'Name, email and message are required.',
        });
    }

    const emailPass = process.env.EMAIL_PASS;
    if (!emailPass) {
        console.error('[Contact API] EMAIL_PASS environment variable is not set. Add it to .env.local');
        return res.status(500).json({
            success: false,
            message: 'Server email configuration is missing. Add EMAIL_PASS to .env.local and restart the dev server.',
        });
    }

    // cPanel SMTP: use only mail.decnox.com, port 465, secure (no IP, no decnox.com)
    const transporter = nodemailer.createTransport({
        host: 'mail.decnox.com',
        port: 465,
        secure: true,
        auth: {
            user: 'office@decnox.com',
            pass: emailPass,
        },
        connectionTimeout: 20000,
        greetingTimeout: 10000,
    });

    const mailOptions = {
        from: '"DECNOX Website" <office@decnox.com>',
        to: 'office@decnox.com',
        replyTo: email,
        subject: 'New Website Contact Message',
        text: [
            `Name: ${name}`,
            `Email: ${email}`,
            ...(phone ? [`Phone: ${phone}`] : []),
            '',
            'Message:',
            message,
        ].join('\n'),
        html: [
            '<p><strong>Name:</strong> ' + escapeHtml(name) + '</p>',
            '<p><strong>Email:</strong> ' + escapeHtml(email) + '</p>',
            ...(phone ? ['<p><strong>Phone:</strong> ' + escapeHtml(phone) + '</p>'] : []),
            '<p><strong>Message:</strong></p>',
            '<p>' + escapeHtml(message).replace(/\n/g, '<br>') + '</p>',
        ].join(''),
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: 'Message sent successfully' });
    } catch (err) {
        const errMsg = err.message || 'Unknown error';
        const errCode = err.code || '';
        const errResponse = err.response ? String(err.response).slice(0, 200) : '';
        console.error('[Contact API] Send mail failed:', errMsg, errCode, errResponse);

        let userMessage = errMsg;
        if (errCode === 'ETIMEDOUT' || errCode === 'ECONNREFUSED' || errCode === 'ESOCKET') {
            userMessage = 'Could not reach mail.decnox.com (connection timed out or blocked). If deployed on Vercel, outbound SMTP is often blocked — deploy where SMTP is allowed (e.g. server at 91.204.209.39) or use an email API like Resend.';
        }
        return res.status(500).json({
            success: false,
            message: userMessage,
        });
    }
}

function escapeHtml(text) {
    if (typeof text !== 'string') return '';
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
    return text.replace(/[&<>"']/g, (m) => map[m]);
}
