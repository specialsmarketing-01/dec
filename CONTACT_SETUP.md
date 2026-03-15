# Contact Form & Email Setup (App Router)

The contact form uses the **App Router** API at `app/api/contact/route.js` and sends emails to **office@decnox.com** via your cPanel SMTP server.

## 1. Install dependency

If Nodemailer is not already installed:

```bash
npm install nodemailer
```

## 2. Environment variable (required)

The API route uses **Nodemailer** and reads the email password from an environment variable so it is **never exposed in the frontend**.

### Create `.env.local`

1. In the **project root**, create a file named **`.env.local`** (or copy from `.env.example`).

2. Add:

   ```env
   EMAIL_PASS=your_email_password
   ```

   Replace `your_email_password` with the actual password for **office@decnox.com** (the one you use in cPanel → Email Accounts or your mail client).

3. **Do not** commit `.env.local` to git. It should already be in `.gitignore` for Next.js.

4. Restart the dev server after adding or changing `.env.local`:

   ```bash
   npm run dev
   ```

## 3. SMTP configuration (already in code)

The API uses **only** `mail.decnox.com` as the SMTP host (no IP, no decnox.com).

- **Host:** mail.decnox.com  
- **Port:** 465  
- **Secure:** true  
- **User:** office@decnox.com  
- **Password:** from `process.env.EMAIL_PASS` (set in `.env.local`)

Your cPanel email server (e.g. at 91.204.209.39) must be reachable when the hostname `mail.decnox.com` is resolved. Ensure DNS for `mail.decnox.com` points to your mail server.

## 4. What the form does

- **Fields:** Name, Email, Message, and a hidden honeypot field (spam protection).  
- **POST:** Sends JSON to `/api/contact` (App Router: `app/api/contact/route.js`).  
- **Email to you (office@decnox.com):**  
  - **Subject:** `New Website Contact Message`  
  - **Body (HTML):** Name, Email, Message.  
  - **Reply-To:** Sender’s email so you can reply directly.  
- **Auto-reply to the user:**  
  - **Subject:** `Thank you for contacting Decnox`  
  - **Body:** “Hello {Name}, Thank you for contacting Decnox. We received your message and our team will get back to you shortly. Best regards, Decnox Team”

## 5. Deployment (e.g. Vercel)

1. In your hosting dashboard, open **Environment Variables** / **Config Vars**.
2. Add:
   - **Name:** `EMAIL_PASS`  
   - **Value:** the password for office@decnox.com  
3. Redeploy the app so the new variable is applied.

Add `EMAIL_PASS` in Vercel → Project → Settings → Environment Variables, then redeploy.

**Note:** Vercel often **blocks outbound SMTP** (ports 465 and 587). If you see `ETIMEDOUT` or "Could not reach mail.decnox.com", either deploy the site where SMTP is allowed (e.g. your server at 91.204.209.39) or switch the contact API to an email service that uses HTTPS (e.g. Resend, SendGrid).

## 6. Chatbot

The live chat (opened from the bottom-right toggle) is a basic chatbot that asks for the visitor’s message, then name and email, and sends everything to **office@decnox.com** via the same contact API. No external AI or API keys are required.

## 7. Troubleshooting

- **“Server email configuration is missing”**  
  - `EMAIL_PASS` is not set. Add it in `.env.local` (local) or in the host’s env vars (production).

- **“Failed to send message”**  
  - Check `EMAIL_PASS` and that **office@decnox.com** is a valid mailbox.  
  - Confirm cPanel allows SMTP on port **465** and that `mail.decnox.com` resolves to your mail server (e.g. 91.204.209.39).

- **“ETIMEDOUT” / “Could not reach mail.decnox.com”**  
  - The code uses only **mail.decnox.com** (no IP). If the connection times out, (1) **Vercel** and similar hosts often block outbound SMTP — deploy on a server where SMTP is allowed (e.g. your server 91.204.209.39), or (2) ensure **DNS** for `mail.decnox.com` points to your mail server IP.

- **Form shows “Message sent successfully” but no email**  
  - Check spam/junk for office@decnox.com.  
  - Check cPanel → Email → Logs or the server logs where the app runs for errors from Nodemailer.
