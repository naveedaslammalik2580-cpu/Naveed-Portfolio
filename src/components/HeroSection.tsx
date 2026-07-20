import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { ArrowRight, Download } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import FadeIn from "./FadeIn";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const ROLES = [
  "Software Engineer",
  "Full-Stack Developer",
  "Data Analyst",
  "React",
  "Node.js",
  "Power BI",
];

export default function HeroSection() {
  return (
    <section
      className="relative flex h-screen flex-col overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #e4e8ee 0%, #c2c9d3 15%, #4a525e 38%, #14181f 65%, #0C0C0C 100%)",
      }}
    >
      {/* Rotating globe background */}
      <Globe />

      {/* Dark edge vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(70% 60% at 50% 45%, transparent 30%, rgba(12,12,12,0.55) 70%, #0C0C0C 100%)",
        }}
      />

      {/* Soft light bloom behind the heading */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-1/2"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 0%, rgba(255,255,255,0.55), transparent 70%)",
        }}
      />

      {/* Navbar */}
      <FadeIn as="nav" delay={0} y={-20} className="relative z-20">
        <div className="flex items-center justify-between px-4 pt-6 sm:px-6 md:px-10 md:pt-8">
          <span
            className="font-display text-base font-bold uppercase tracking-wide sm:text-lg md:text-xl"
            style={{
              color: "#C6902E",
              textShadow: "0 1px 6px rgba(0,0,0,0.35)",
            }}
          >
            Naveed Aslam
          </span>
          <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-bold uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-60"
                  style={{ textShadow: "0 1px 8px rgba(0,0,0,0.55)" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/923296136483"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium uppercase tracking-widest text-white transition-transform duration-200 hover:scale-[1.03] sm:gap-2 sm:px-6"
            style={{
              background: "linear-gradient(120deg, #C6902E 0%, #E0B44A 100%)",
              boxShadow: "0 6px 18px -6px rgba(198,144,46,0.6)",
            }}
          >
            <FaWhatsapp size={16} />
            <span className="sm:hidden">WhatsApp</span>
            <span className="hidden sm:inline">Contact on WhatsApp</span>
          </a>
        </div>
      </FadeIn>

      {/* Hero content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 text-center sm:px-8">
        <FadeIn
          as="h1"
          delay={0.1}
          y={40}
          className="font-display font-semibold leading-[1.05] tracking-tight text-[#EEF2F6]"
          style={{ fontSize: "clamp(2.2rem, 6vw, 5.5rem)", textShadow: "0 2px 14px rgba(0,0,0,0.55)" }}
        >
          I engineer{" "}
          <span className="font-bold" style={{ color: "#C6902E" }}>
            products
          </span>
          , and turn
          <br className="hidden sm:block" /> their data into{" "}
          <span className="font-bold" style={{ color: "#C6902E" }}>
            decisions
          </span>
          .
        </FadeIn>

        <FadeIn delay={0.25} y={24}>
          <div
            className="mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-x-3 gap-y-2 font-medium uppercase tracking-wide text-[#D7E2EA]"
            style={{ fontSize: "clamp(0.7rem, 1.2vw, 0.95rem)", textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}
          >
            {ROLES.map((role, i) => (
              <span key={role} className="flex items-center gap-x-3">
                {role}
                {i < ROLES.length - 1 && (
                  <span aria-hidden="true" style={{ color: "#C6902E" }}>
                    &bull;
                  </span>
                )}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn
          delay={0.4}
          y={24}
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium uppercase tracking-widest text-white transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6902E]"
            style={{
              background: "linear-gradient(120deg, #C6902E 0%, #E0B44A 100%)",
              boxShadow: "0 8px 22px -8px rgba(198,144,46,0.65)",
            }}
          >
            See my work <ArrowRight size={16} />
          </a>
          <a
            href="/resume.pdf"
            download="Naveed-Aslam-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium uppercase tracking-widest text-[#1b2431] transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            style={{ boxShadow: "0 8px 22px -10px rgba(0,0,0,0.5)" }}
          >
            <Download size={16} /> Download résumé
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

/** Slowly auto-rotating dotted globe (cobe / WebGL), centered behind the hero. */
function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = 0;
    let width = 0;
    let globe: ReturnType<typeof createGlobe> | null = null;
    let frameId = 0;
    let rebuildTimer: ReturnType<typeof setTimeout> | null = null;
    let visible = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const buildGlobe = () => {
      if (width <= 0) return;
      if (globe) {
        globe.destroy();
        globe = null;
      }
      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: width * dpr,
        height: width * dpr,
        phi: 0,
        theta: 0.25,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 13,
        baseColor: [0.09, 0.11, 0.15],
        markerColor: [0.75, 0.85, 1],
        glowColor: [0.4, 0.5, 0.65],
        markers: [],
      });
      canvas.style.opacity = "1";
    };

    // Measure; if the width changed meaningfully, (re)build after a short debounce
    // so we always end up built at the real, settled size.
    const measure = () => {
      const w = canvas.offsetWidth;
      if (w > 0 && Math.abs(w - width) > 1) {
        width = w;
        if (rebuildTimer) clearTimeout(rebuildTimer);
        rebuildTimer = setTimeout(buildGlobe, 80);
      }
    };

    const ro = new ResizeObserver(measure);
    ro.observe(canvas);
    measure(); // attempt an immediate measure in case size is already known

    // Only render while the hero is actually scrolled into view.
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    // Render loop — guarded so it never throws if globe isn't ready.
    const animate = () => {
      if (globe && width > 0 && visible && !document.hidden) {
        phi += 0.004;
        try {
          globe.update({ phi, width: width * dpr, height: width * dpr });
        } catch {
          /* swallow transient update errors */
        }
      }
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);

    // WebGL context loss/restore recovery.
    const onLost = (e: Event) => e.preventDefault();
    const onRestored = () => buildGlobe();
    canvas.addEventListener("webglcontextlost", onLost as EventListener, false);
    canvas.addEventListener("webglcontextrestored", onRestored as EventListener, false);

    // If the tab was backgrounded and the context died, rebuild on return.
    const onVisible = () => {
      if (document.visibilityState === "visible") {
        measure();
        if (!globe && width > 0) buildGlobe();
      }
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      if (rebuildTimer) clearTimeout(rebuildTimer);
      cancelAnimationFrame(frameId);
      ro.disconnect();
      io.disconnect();
      canvas.removeEventListener("webglcontextlost", onLost as EventListener);
      canvas.removeEventListener("webglcontextrestored", onRestored as EventListener);
      document.removeEventListener("visibilitychange", onVisible);
      if (globe) globe.destroy();
    };
  }, []);

  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 aspect-square w-[min(170vw,1400px)] -translate-x-1/2 -translate-y-1/2">
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          opacity: 0,
          transition: "opacity 1s ease",
          contain: "layout paint size",
        }}
      />
    </div>
  );
}
