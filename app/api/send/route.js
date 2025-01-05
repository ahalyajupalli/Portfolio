import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const {body} = req
  const {email, subject, message} = body
  console.log(req);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["onboarding@resend.dev", email],
      subject: subject,
      react: (
        <>
          <p>Email body</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}