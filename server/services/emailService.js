const nodemailer = require('nodemailer');
require('dotenv').config();

// Only configured if SMTP env vars are present; otherwise this becomes a no-op.
const isConfigured = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

const transporter = isConfigured
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    })
  : null;

async function sendContactNotification({ name, phone, email, message }) {
  if (!transporter) {
    console.log('ℹ️ SMTP not configured — skipping email notification.');
    return;
  }

  await transporter.sendMail({
    from: `"LIC Portfolio Website" <${process.env.SMTP_USER}>`,
    to: process.env.ADVISOR_EMAIL || process.env.SMTP_USER,
    subject: `New enquiry from ${name}`,
    html: `
      <h3>New contact form submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  });
}

module.exports = { sendContactNotification };
