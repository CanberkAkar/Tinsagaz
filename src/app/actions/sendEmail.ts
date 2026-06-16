'use server';

import nodemailer from 'nodemailer';

export interface SendEmailData {
  ad: string;
  soyad: string;
  email: string;
  telefon?: string;
  konu: string;
  mesaj: string;
}

export async function sendEmailAction(data: SendEmailData) {
  const { ad, soyad, email, telefon, konu, mesaj } = data;

  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  // Safe fallback if SMTP is not configured in environment
  if (!host || !user || !pass) {
    console.warn("SMTP credentials are not configured. Falling back to console simulation.");
    console.log("--- Simulated Contact Form E-mail ---");
    console.log(`To: info@tinsagaz.com.tr`);
    console.log(`From: ${ad} ${soyad} <${email}>`);
    console.log(`Phone: ${telefon || 'Not provided'}`);
    console.log(`Subject: ${konu}`);
    console.log(`Message:\n${mesaj}`);
    console.log("-------------------------------------");
    return { success: true, fallback: true };
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for other ports
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: `"${ad} ${soyad} (Web Form)" <${user}>`,
      to: 'info@tinsagaz.com.tr',
      replyTo: email,
      subject: `Tinsagaz İletişim: ${konu} - ${ad} ${soyad}`,
      text: `Ad Soyad: ${ad} ${soyad}\nE-posta: ${email}\nTelefon: ${telefon || 'Belirtilmedi'}\nKonu: ${konu}\n\nMesaj:\n${mesaj}`,
      html: `
        <h3>Tinsagaz İletişim Formu Mesajı</h3>
        <p><strong>Ad Soyad:</strong> ${ad} ${soyad}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${telefon || 'Belirtilmedi'}</p>
        <p><strong>Konu:</strong> ${konu}</p>
        <hr />
        <p><strong>Mesaj:</strong></p>
        <p style="white-space: pre-wrap;">${mesaj}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error: any) {
    console.error("Email sending failed:", error);
    return { success: false, error: error?.message || "E-posta gönderilirken hata oluştu." };
  }
}
