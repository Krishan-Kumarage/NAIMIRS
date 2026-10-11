export type ContactFormFields = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormFields, string>>;
