import nodemailer from "nodemailer";

export default async function handler(req, res) {
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
      to: "rishikesh@coinage.in", // Change to your recipient
      subject: "Scheduled Email",
      text: "This email is sent every 10 minutes via Vercel cron job.",
    });

    console.log("Email sent");
    res.status(200).json({ message: "Email sent" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
}
