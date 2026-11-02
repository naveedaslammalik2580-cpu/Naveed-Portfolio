import type { ReactNode } from "react";
import { Code2, Layers3, PanelsTopLeft, LockKeyhole } from "lucide-react";
import styles from "./HeroProductVisual.module.css";

const CAPABILITIES = [
  { title: "WEB APPLICATIONS", description: "Custom solutions for modern businesses", icon: Code2, position: "applications" },
  { title: "SAAS PLATFORMS", description: "Scalable and secure products", icon: Layers3, position: "platforms" },
  { title: "BUSINESS WEBSITES", description: "Modern, fast and conversion-focused", icon: PanelsTopLeft, position: "websites" },
  { title: "CLIENT PORTALS", description: "Secure and easy-to-use systems", icon: LockKeyhole, position: "portals" },
] as const;

/** A contained visual composition; never changes the approved text column. */
export default function HeroProductVisual({ children }: { children: ReactNode }) {
  return (
    <div className={styles.composition}>
      <div className={styles.globe}>{children}</div>

      <svg className={styles.connections} viewBox="0 0 540 540" fill="none" aria-hidden="true">
        <ellipse cx="283" cy="253" rx="226" ry="101" transform="rotate(-29 283 253)" />
        <path d="M78 137 C91 241 134 329 265 384 M457 100 C437 167 391 197 368 267" />
        <path d="M124 243 C186 263 191 327 225 376 M445 287 C422 330 391 349 347 367" />
        <g className={styles.nodes}>
          <circle cx="78" cy="137" r="3" />
          <circle cx="457" cy="100" r="3" />
          <circle cx="445" cy="287" r="3" />
        </g>
      </svg>

      <ul className={styles.capabilities} aria-label="Digital product capabilities">
        {CAPABILITIES.map(({ title, description, icon: Icon, position }) => (
          <li key={title} className={`${styles.capability} ${styles[position]}`}>
            <span className={styles.icon}><Icon aria-hidden="true" /></span>
            <div>
              <p className={styles.title}>{title}</p>
              <p className={styles.description}>{description}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.ground} aria-hidden="true" />
    </div>
  );
}
