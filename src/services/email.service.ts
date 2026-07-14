import emailjs from "@emailjs/browser";
import type { ContactFormValues } from "@/lib/validations";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export class EmailServiceError extends Error {}

export async function sendContactEmail(data: ContactFormValues): Promise<void> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new EmailServiceError("Email service is not configured. Please try again later.");
  }

  // Honeypot check - if filled, silently succeed without sending (bot submission)
  if (data.honeypot) {
    return;
  }

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
      },
      { publicKey: PUBLIC_KEY }
    );
  } catch {
    throw new EmailServiceError("Unable to send your message. Please try again later.");
  }
}
