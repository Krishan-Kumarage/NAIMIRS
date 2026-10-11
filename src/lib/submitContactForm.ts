import type { ContactFormFields } from "../types/contact";

export class ContactSubmitError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ContactSubmitError";
  }
}

export async function submitContactForm(
  payload: ContactFormFields,
): Promise<void> {
  const baseUrl = import.meta.env.VITE_API_URL?.trim();

  if (!baseUrl) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    return;
  }

  const response = await fetch(`${baseUrl.replace(/\/$/, "")}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fullName: payload.fullName.trim(),
      email: payload.email.trim(),
      subject: payload.subject.trim(),
      message: payload.message.trim(),
    }),
  });

  if (!response.ok) {
    let detail = "Unable to send your message. Please try again later.";
    try {
      const data = (await response.json()) as {
        detail?: string;
        message?: string;
      };
      detail = data.detail ?? data.message ?? detail;
    } catch {
      /* ignore */
    }
    throw new ContactSubmitError(detail);
  }
}
