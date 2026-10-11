import { type FormEvent, useId, useState } from "react";
import {
  ContactSubmitError,
  submitContactForm,
} from "../lib/submitContactForm";
import { validateContactForm } from "../lib/validateContactForm";
import type { ContactFormErrors, ContactFormFields } from "../types/contact";
import styles from "./ContactForm.module.css";

const initialValues: ContactFormFields = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const formId = useId();
  const [values, setValues] = useState<ContactFormFields>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof ContactFormFields>(
    key: K,
    value: ContactFormFields[K],
  ) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    setSubmitError(null);
    setSubmitted(false);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    setSubmitError(null);

    try {
      await submitContactForm(values);
      setSubmitted(true);
      setValues(initialValues);
    } catch (error) {
      if (error instanceof ContactSubmitError) {
        setSubmitError(error.message);
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className={styles.wrap}>
      {submitted && (
        <div className={styles.success} role="status">
          Thank you — your message was received.
        </div>
      )}
      {submitError && (
        <div className={styles.errorBanner} role="alert">
          {submitError}
        </div>
      )}
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor={`${formId}-name`}>Full name</label>
            <input
              id={`${formId}-name`}
              value={values.fullName}
              onChange={(e) => updateField("fullName", e.target.value)}
              aria-invalid={Boolean(errors.fullName)}
            />
            {errors.fullName && (
              <span className={styles.fieldError}>{errors.fullName}</span>
            )}
          </div>
          <div className={styles.field}>
            <label htmlFor={`${formId}-email`}>Email</label>
            <input
              id={`${formId}-email`}
              type="email"
              value={values.email}
              onChange={(e) => updateField("email", e.target.value)}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && (
              <span className={styles.fieldError}>{errors.email}</span>
            )}
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor={`${formId}-subject`}>Subject</label>
          <input
            id={`${formId}-subject`}
            value={values.subject}
            onChange={(e) => updateField("subject", e.target.value)}
            aria-invalid={Boolean(errors.subject)}
          />
          {errors.subject && (
            <span className={styles.fieldError}>{errors.subject}</span>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor={`${formId}-message`}>Message</label>
          <textarea
            id={`${formId}-message`}
            rows={5}
            value={values.message}
            onChange={(e) => updateField("message", e.target.value)}
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message && (
            <span className={styles.fieldError}>{errors.message}</span>
          )}
        </div>
        <button type="submit" className={styles.submit} disabled={submitting}>
          {submitting ? "Sending…" : "Send message"}
        </button>
      </form>
    </div>
  );
}
