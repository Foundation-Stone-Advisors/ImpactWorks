import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Impact Works <onboarding@resend.dev>",
      to: "eric@impactclay.org",
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
