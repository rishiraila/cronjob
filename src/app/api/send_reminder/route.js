// app/api/send_reminder/route.js

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
      text: "This email is sent via Vercel cron job.",
    });

    console.log("Email sent successfully.");
    return new Response("Email sent successfully", { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return new Response("Email sending failed", { status: 500 });
  }
}
