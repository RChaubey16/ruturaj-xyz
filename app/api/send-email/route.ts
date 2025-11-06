import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY as string);

type EmailRequestBody = {
  from: string;
  name: string;
  mailBody: string;
};

export async function POST(req: Request) {
  try {
    const { from, name, mailBody }: EmailRequestBody = await req.json();

    const html = `
      <div style="font-family: sans-serif; line-height: 1.6; color: #222;">
        <h4 style="margin-bottom: 8px;">New message from your portfolio (ruturaj.xyz)</h4>
        <p style="margin: 4px 0;">
          <strong>Name:</strong> ${name || "No name provided"}<br />
          <strong>Email:</strong> ${from || "No email provided"}
        </p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 12px 0;" />
        <p style="font-size: 15px; white-space: pre-line;">
          ${mailBody || "(No message content)"}
        </p>
      </div>
    `;

    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // safe sender domain
      to: [process.env.MY_EMAIL as string],
      subject: "New message from your portfolio",
      html,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    console.error("Email send error:", error);

    const message =
      error instanceof Error ? error.message : "Unknown error occurred";

    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
