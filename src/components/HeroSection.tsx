import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import FadeIn from "./FadeIn";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

// No booking link was supplied — falls back to a prefilled mailto. Swap for a
// real Calendly / Cal.com URL (and add target="_blank" rel="noopener noreferrer") when you have one.
const BOOKING_URL = "mailto:lifeislove975@gmail.com?subject=Project%20enquiry";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden"
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
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border-2 px-4 py-2.5 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA] sm:gap-2 sm:px-6"
            style={{
              borderColor: "#D7E2EA",
              textShadow: "0 1px 8px rgba(0,0,0,0.55)",
              boxShadow: "0 1px 10px rgba(0,0,0,0.3)",
            }}
          >
            <FaWhatsapp size={16} />
            <span className="sm:hidden">WhatsApp</span>
            <span className="hidden sm:inline">Contact on WhatsApp</span>
          </a>
        </div>
      </FadeIn>

      {/* Hero content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-28 text-center sm:px-8 sm:py-32">
        <FadeIn
          as="p"
          delay={0.05}
          y={16}
          className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] sm:mb-4 sm:text-sm"
          style={{ color: "#C6902E", textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
        >
          Full-stack development + Power BI analytics
        </FadeIn>

        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          className="font-display font-semibold leading-[1.05] tracking-tight text-[#EEF2F6]"
          style={{ fontSize: "clamp(1.9rem, 5.4vw, 4.6rem)", textShadow: "0 2px 14px rgba(0,0,0,0.55)" }}
        >
          I build the{" "}
          <span className="font-bold" style={{ color: "#C6902E" }}>
            product
          </span>{" "}
          — and the{" "}
          <span className="font-bold" style={{ color: "#C6902E" }}>
            dashboards
          </span>{" "}
          that tell you it&apos;s working.
        </FadeIn>

        <FadeIn
          as="p"
          delay={0.3}
          y={24}
          className="mt-5 max-w-2xl font-display font-medium leading-snug text-[#D7E2EA] sm:mt-6"
          style={{ fontSize: "clamp(1rem, 2.4vw, 1.5rem)", textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}
        >
          Web apps and business analytics, shipped end-to-end by one person.
          You get a live product and the numbers to run it — without hiring a
          team.
        </FadeIn>

        <FadeIn
          as="p"
          delay={0.4}
          y={24}
          className="mt-4 max-w-2xl font-normal leading-relaxed text-[#D7E2EA]/80"
          style={{ fontSize: "clamp(0.8rem, 1.4vw, 1rem)" }}
        >
          I&apos;ve built a multi-tenant SaaS platform, a retail analytics
          suite, and production WordPress sites. If you need software that
          ships and data you can actually read, that&apos;s the whole job I
          do.
        </FadeIn>

        <FadeIn
          delay={0.55}
          y={24}
          className="mt-8 flex flex-col items-center gap-3 sm:mt-9 sm:flex-row sm:gap-4"
        >
          <a
            href={BOOKING_URL}
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium uppercase tracking-widest text-[#0C0C0C] transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6902E]"
            style={{
              background: "var(--gold-gradient)",
              boxShadow: "var(--gold-shadow)",
            }}
          >
            Book a free 20-min project call <ArrowRight size={16} />
          </a>
          <a
            href="#tetramagnet"
            className="inline-flex items-center gap-2 rounded-full border-2 px-8 py-3.5 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA]"
            style={{ borderColor: "#D7E2EA" }}
          >
            See how I built TetraMagnet <ArrowRight size={16} />
          </a>
        </FadeIn>

        <FadeIn
          as="p"
          delay={0.65}
          y={16}
          className="mt-4 text-[10px] font-medium uppercase tracking-wider text-[#D7E2EA]/60 sm:text-xs"
        >
          Usually replies within 24 hours · Remote · Available for new projects
        </FadeIn>

        <FadeIn
          as="p"
          delay={0.75}
          y={16}
          className="mt-5 max-w-3xl font-medium uppercase tracking-wide text-[#D7E2EA]/50"
          style={{ fontSize: "clamp(0.6rem, 1vw, 0.75rem)" }}
        >
          Built with React · Next.js · Node · Power BI &nbsp;|&nbsp; Shipped:
          a live SaaS, analytics dashboards, WordPress sites
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
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 z-0 aspect-square w-[min(130vw,1200px)] -translate-x-1/2 -translate-y-1/2 opacity-40"
    >
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
