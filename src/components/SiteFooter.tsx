import { siteConfig } from "../content/siteContent";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brandCol}>
          <div className={styles.brand}>
            <span className={styles.logoMark} aria-hidden />
            {siteConfig.name}
          </div>
          <p className={styles.blurb}>{siteConfig.footer.blurb}</p>
        </div>

        {siteConfig.footer.navGroups.map((group) => (
          <div key={group.title}>
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <ul className={styles.linkList}>
              {group.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <p>© {year} {siteConfig.footer.copyright}</p>
        <div className={styles.legal}>
          {siteConfig.footer.legal.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
