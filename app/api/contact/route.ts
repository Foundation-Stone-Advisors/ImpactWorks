import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, message, reason } = await req.json();
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Notify admin
    await resend.emails.send({
      from: "Impact Works <noreply@impact-works.us>",
      to: "eric@impactclay.org",
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nReason: ${reason}\n\nMessage:\n${message}`,
    });

    // Confirmation to submitter
    await resend.emails.send({
      from: "Impact Works <noreply@impact-works.us>",
      to: email,
      subject: "We received your message",
      text: `Hi ${name},\n\nThank you for reaching out to Impact Works. We've received your message and will get back to you within 2 business days.\n\nYour message:\n${message}\n\n— The Impact Works Team`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
