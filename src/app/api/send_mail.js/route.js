// src/app/api/send_mail/route.js

import nodemailer from "nodemailer";

export async function GET(req) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Cron Mailer" <${process.env.EMAIL_USER}>`,
      to: "rishikesh@coinage.in",
      subject: "Scheduled Email",
      text: "This email is sent every 10 minutes via Vercel cron job.",
    });

    console.log("Email sent");
    return Response.json({ message: "Email sent" });
  } catch (error) {
    console.error("Email error:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
