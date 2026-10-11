import { siteConfig } from "../content/siteContent";
import { ContactForm } from "../components/ContactForm";
import { SectionHeading } from "../components/SectionHeading";
import styles from "./ContactSection.module.css";

export function ContactSection() {
  const { contact } = siteConfig;

  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-title"
    >
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Get in touch"
          title={contact.title}
          description={contact.description}
        />

        <div className={styles.layout}>
          <aside className={styles.aside}>
            <h3>{contact.subtitle}</h3>
            <p>{contact.description}</p>
            <div className={styles.detailBlock}>
              <span>Email us</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            <div className={styles.detailBlock}>
              <span>Our location</span>
              <p>{contact.location}</p>
            </div>
          </aside>
          <div className={styles.formPanel}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
