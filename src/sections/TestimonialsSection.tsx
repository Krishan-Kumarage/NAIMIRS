import { testimonialsSection } from "../content/siteContent";
import { SectionHeading } from "../components/SectionHeading";
import styles from "./TestimonialsSection.module.css";

export function TestimonialsSection() {
  return (
    <section
      id={testimonialsSection.id}
      className={styles.section}
      aria-labelledby="testimonials-title"
    >
      <div className={styles.inner}>
        <SectionHeading
          eyebrow={testimonialsSection.eyebrow}
          title={testimonialsSection.title}
          align="center"
        />

        <div className={styles.featured}>
          <div className={styles.featuredBadge}>Featured</div>
          <h3>{testimonialsSection.featured.title}</h3>
          <p>{testimonialsSection.featured.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {testimonialsSection.items.map((item) => (
            <figure key={item.id} className={styles.card}>
              <blockquote>“{item.quote}”</blockquote>
              <figcaption>
                <strong>{item.author}</strong>
                <span>{item.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
