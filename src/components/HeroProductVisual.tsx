import { useEffect, useState, type ReactNode } from "react";
import { Code2, Layers3, PanelsTopLeft, LockKeyhole } from "lucide-react";
import styles from "./HeroProductVisual.module.css";

// Motion track matching the visible orbit ellipse
// (cx 283, cy 253, rx 226, ry 101, rotated -29°) as a closed path.
const ORBIT_ELLIPSE =
  "M 480.7 143.4 C 507.7 192.2, 441.1 280.8, 332.0 341.3 C 222.8 401.8, 112.4 411.4, 85.3 362.6 C 58.3 313.8, 124.9 225.2, 234.0 164.7 C 343.2 104.2, 453.6 94.6, 480.7 143.4 Z";
// First sweep of the existing connection paths, reused as a motion track.
const ORBIT_SWEEP = "M78 137 C91 241 134 329 265 384";

const CAPABILITIES = [
  { title: "WEB APPLICATIONS", description: "Custom solutions for modern businesses", icon: Code2, position: "applications" },
  { title: "SAAS PLATFORMS", description: "Scalable and secure products", icon: Layers3, position: "platforms" },
  { title: "BUSINESS WEBSITES", description: "Modern, fast and conversion-focused", icon: PanelsTopLeft, position: "websites" },
  { title: "CLIENT PORTALS", description: "Secure and easy-to-use systems", icon: LockKeyhole, position: "portals" },
] as const;

/** A contained visual composition; never changes the approved text column. */
export default function HeroProductVisual({ children }: { children: ReactNode }) {
  // Respect prefers-reduced-motion: no travelling signals in that case.
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

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

      {!reduceMotion && (
        <svg className={styles.signals} viewBox="0 0 540 540" fill="none" aria-hidden="true">
          {/* Two signals travelling the main orbit ellipse, offset from each other */}
          <g>
            <circle r="5" fill="#D4A037" opacity="0.12" />
            <circle r="1.4" fill="#D4A037" />
            <animateMotion dur="15s" begin="-2s" repeatCount="indefinite" path={ORBIT_ELLIPSE} />
          </g>
          <g>
            <circle r="5" fill="#D4A037" opacity="0.12" />
            <circle r="1.4" fill="#D4A037" />
            <animateMotion dur="18s" begin="-11s" repeatCount="indefinite" path={ORBIT_ELLIPSE} />
          </g>
          {/* One signal gliding along a connection sweep, fading at both ends */}
          <g className={styles.signalPath} opacity="0">
            <circle r="5" fill="#D4A037" opacity="0.12" />
            <circle r="1.4" fill="#D4A037" />
            <animateMotion dur="12s" begin="-5s" repeatCount="indefinite" path={ORBIT_SWEEP} />
            <animate
              attributeName="opacity"
              values="0;0.95;0.95;0"
              keyTimes="0;0.15;0.85;1"
              dur="12s"
              begin="-5s"
              repeatCount="indefinite"
            />
          </g>
        </svg>
      )}

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
