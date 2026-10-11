import type { ResourceItem } from "../content/siteContent";
import { resourcesSection } from "../content/siteContent";
import { SectionHeading } from "../components/SectionHeading";
import styles from "./ResourcesSection.module.css";

function ResourceList({
  title,
  items,
}: {
  title: string;
  items: ResourceItem[];
}) {
  return (
    <div className={styles.column}>
      <h3>{title}</h3>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            <div className={styles.itemTop}>
              <div>
                <p className={styles.itemTitle}>{item.title}</p>
                {item.submitted ? (
                  <p className={styles.submitted}>Submitted {item.submitted}</p>
                ) : null}
              </div>
              <span className={styles[`status_${item.status}`]}>
                {item.status === "download"
                  ? "Download"
                  : item.status === "soon"
                    ? "Soon"
                    : "Coming soon"}
              </span>
            </div>
            {item.scope ? (
              <span className={styles.scope}>{item.scope}</span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ResourcesSection() {
  return (
    <section
      id={resourcesSection.id}
      className={styles.section}
      aria-labelledby="resources-title"
    >
      <div className={styles.inner}>
        <SectionHeading
          eyebrow={resourcesSection.eyebrow}
          title={resourcesSection.title}
          description={resourcesSection.description}
        />
        <div className={styles.grid}>
          <ResourceList
            title="Technical documents"
            items={resourcesSection.documents}
          />
          <ResourceList
            title="Presentations"
            items={resourcesSection.presentations}
          />
        </div>
      </div>
    </section>
  );
}
