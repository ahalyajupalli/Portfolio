import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    // Parse JSON from request body
    const body = await req.json();
    const { email, subject, message } = body;

    const data = await resend.emails.send({
      from: fromEmail,
      to: ["ahalyaserene@gmail.com", email],
      subject: subject,
      html: `<p>${message}</p>`, // Use HTML string instead of JSX
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
