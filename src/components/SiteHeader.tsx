import { useEffect, useState } from "react";
import { siteConfig } from "../content/siteContent";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.brand}>
          <span className={styles.logoMark} aria-hidden />
          {siteConfig.name}
        </a>

        <nav className={styles.desktopNav} aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={item.href === "#contact" ? styles.cta : styles.navLink}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className={styles.mobileContactOnly}>
          Contact
        </a>
      </div>
    </header>
  );
}
