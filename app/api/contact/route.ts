import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();
  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  const subject = String(formData.get("subject") || "New inquiry");
  const message = String(formData.get("message") || "");

  // TODO: Wire to email provider (Resend/SendGrid/SMTP)
  console.log("New inquiry:", { name, email, subject, message });
  return NextResponse.redirect(new URL("/contact?sent=1", req.url), { status: 303 });
}