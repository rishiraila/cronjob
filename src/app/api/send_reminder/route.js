// app/api/send_reminder/route.js

export async function GET(req) {
  // Your scheduled task logic
  console.log("Cron job triggered!");

  // Example: send email, clean data, update DB, etc.
  return new Response("Cron job executed successfully!", { status: 200 });
}
