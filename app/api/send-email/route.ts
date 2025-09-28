import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, error: "Missing required fields" },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            replyTo: email,
            subject: `📩 New message from ${name}`,
            text: `From: ${name} (${email})\n\n${message}`, // fallback plain text
            html: `
        <html>
          <head>
            <meta name="color-scheme" content="light dark">
            <meta name="supported-color-schemes" content="light dark">
          </head>
          <body style="margin:0; padding:0; font-family: Arial, sans-serif; background: #f9f9f9; color: #333;">
            <div style="max-width:600px; margin:20px auto; padding:20px; border-radius:12px; background:#ffffff; color:#333;"
                 class="email-wrapper">
              <h2 style="color:#444;">📬 New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <div style="margin:10px 0; padding:12px; background:#f6f6f6; border:1px solid #ddd; border-radius:8px;">
                ${message.replace(/\n/g, "<br/>")}
              </div>
              <hr style="margin:20px 0; border:none; border-top:1px solid #ddd;" />
              <p style="font-size:12px; color:#888;">This email was sent automatically by your website contact form.</p>
            </div>
            <style>
              @media (prefers-color-scheme: dark) {
                body { background: #121212 !important; color: #eee !important; }
                .email-wrapper { background: #1e1e1e !important; color: #eee !important; border:1px solid #333 !important; }
                .email-wrapper h2 { color: #fff !important; }
                .email-wrapper div { background:#2a2a2a !important; border-color:#444 !important; }
                .email-wrapper p, .email-wrapper strong { color:#eee !important; }
              }
            </style>
          </body>
        </html>
      `,
        });

        return NextResponse.json({ success: true, message: "Email sent successfully" });
    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        console.error("Error sending email:", errorMessage);

        return NextResponse.json(
            { success: false, error: errorMessage },
            { status: 500 }
        );
    }
}
