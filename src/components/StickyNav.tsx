import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

/**
 * Persistent nav that appears once the Hero (id="home") scrolls out of view,
 * and hides again if the user scrolls back into it — the Hero has its own
 * nav/CTAs, so the two should never be on screen together. Visibility is
 * driven by IntersectionObserver (same idiom as HeroSection's Globe), not a
 * per-frame scroll listener.
 */
export default function StickyNav() {
  const [visible, setVisible] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    const io = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  // Removes the nav from tab order and hit-testing while hidden, so it can
  // never trap focus or intercept clicks — set imperatively via ref since
  // `inert` isn't yet in this project's React/framer-motion prop types.
  useEffect(() => {
    if (navRef.current) navRef.current.inert = !visible;
  }, [visible]);

  return (
    <motion.nav
      ref={navRef}
      aria-label="Section navigation"
      initial={{ opacity: 0, y: reduceMotion ? 0 : -16 }}
      animate={{ opacity: visible ? 1 : 0, y: visible || reduceMotion ? 0 : -16 }}
      transition={{ duration: reduceMotion ? 0 : 0.35, ease: EASE }}
      className="fixed inset-x-0 top-0 z-40"
      style={{
        background: "rgba(12,12,12,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(215,226,234,0.12)",
        boxShadow: "0 8px 24px -12px rgba(0,0,0,0.5)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 md:px-10">
        <a
          href="#home"
          className="font-display text-sm font-bold uppercase tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6902E] sm:text-base"
          style={{ color: "#C6902E" }}
        >
          Naveed Aslam
        </a>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-bold uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6902E]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="inline-flex shrink-0 items-center rounded-full px-5 py-2 text-sm font-medium uppercase tracking-widest text-[#0C0C0C] transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6902E]"
          style={{
            background: "var(--gold-gradient)",
            boxShadow: "var(--gold-shadow)",
          }}
        >
          Let&apos;s talk
        </a>
      </div>
    </motion.nav>
  );
}
