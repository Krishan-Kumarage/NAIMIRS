import type { ContactFormErrors, ContactFormFields } from "../types/contact";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(
  values: ContactFormFields,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Please enter your name.";
  } else if (values.fullName.trim().length < 2) {
    errors.fullName = "Name must be at least 2 characters.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.subject.trim()) {
    errors.subject = "Please add a subject.";
  } else if (values.subject.trim().length < 3) {
    errors.subject = "Subject must be at least 3 characters.";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter your message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}
