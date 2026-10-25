import { useEffect, useRef } from "react";
import { MotionConfig, useReducedMotion } from "framer-motion";
import createGlobe from "cobe";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import FadeIn from "./FadeIn";
import HeroProductVisual from "./HeroProductVisual";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// Preserve the existing project-enquiry action until a booking URL is supplied.
const BOOKING_URL = "mailto:lifeislove975@gmail.com?subject=Project%20enquiry";

export default function HeroSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="home"
        className="relative flex min-h-screen flex-col overflow-hidden bg-[#0C0C0C]"
        style={{
          background:
            "radial-gradient(ellipse at 90% 45%, #14181f 0%, #0C0C0C 65%)",
        }}
      >
        <FadeIn as="nav" delay={0} y={-20} className="relative z-20">
          <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-y-5 px-5 pt-6 sm:px-8 md:px-10 md:pt-8">
            <a
              href="#home"
              aria-label="Naveed Aslam — back to home"
              className="font-display text-base font-bold uppercase tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6902E] sm:text-lg md:text-xl"
              style={{ color: "var(--gold-solid)" }}
            >
              Naveed Aslam
            </a>
            <ul className="order-3 flex w-full items-center justify-between gap-3 lg:order-none lg:w-auto lg:gap-6 xl:gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-xs font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6902E] sm:text-sm"
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
              className="inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-full border px-4 py-2.5 text-xs font-medium uppercase tracking-wider text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA] sm:gap-2 sm:px-6 sm:text-sm"
              style={{ borderColor: "rgba(215,226,234,0.5)" }}
            >
              <FaWhatsapp size={16} aria-hidden="true" />
              <span className="sm:hidden">WhatsApp</span>
              <span className="hidden sm:inline">Contact on WhatsApp</span>
            </a>
          </div>
        </FadeIn>

        <div className="relative mx-auto grid w-full max-w-[1440px] flex-1 grid-cols-1 items-center px-5 pb-10 pt-12 sm:px-8 sm:pt-16 md:px-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:py-20 xl:py-24">
          <div className="relative z-10 min-w-0">
            <FadeIn
              as="p"
              delay={0.05}
              y={16}
              className="mb-4 text-xs font-medium uppercase tracking-[0.2em] sm:mb-5 sm:text-sm lg:mb-3"
              style={{ color: "var(--gold-solid)" }}
            >
              FULL-STACK SOFTWARE ENGINEER
            </FadeIn>

            <FadeIn
              as="h1"
              delay={0.15}
              y={40}
              className="font-display max-w-[820px] text-[clamp(2.125rem,4.45vw,3.625rem)] font-semibold leading-[1.08] tracking-tight text-[#EEF2F6] lg:text-[clamp(2.125rem,4vw,3.625rem)]"
              style={{ textWrap: "balance" }}
            >
              Helping businesses and founders build{" "}
              <span style={{ color: "var(--gold-solid)" }}>
                websites, web apps, and SaaS products
              </span>{" "}
              that solve real problems.
            </FadeIn>

            <FadeIn
              as="p"
              delay={0.3}
              y={24}
              className="mt-6 max-w-xl text-base font-normal leading-relaxed text-[#D7E2EA]/80 sm:text-lg"
            >
              I design and develop complete digital products — from responsive
              interfaces to APIs, databases, authentication, and production-ready
              web applications.
            </FadeIn>

            <FadeIn
              delay={0.55}
              y={24}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
            >
              <a
                href="#work"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium uppercase tracking-wider text-[#0C0C0C] transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6902E] motion-reduce:transform-none"
                style={{
                  background: "var(--gold-gradient)",
                  boxShadow: "var(--gold-shadow)",
                }}
              >
                VIEW MY WORK <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                href={BOOKING_URL}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-7 py-3.5 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA]"
                style={{ borderColor: "rgba(215,226,234,0.5)" }}
              >
                BOOK A PROJECT CALL <ArrowRight size={16} aria-hidden="true" />
              </a>
            </FadeIn>

            <FadeIn
              as="p"
              delay={0.65}
              y={16}
              className="mt-5 max-w-xl text-xs leading-relaxed text-[#D7E2EA]/70 sm:text-sm"
            >
              Usually replies within 24 hours · Remote · Available for new projects
            </FadeIn>
          </div>

          <HeroProductVisual>
            <Globe />
          </HeroProductVisual>
        </div>
      </section>
    </MotionConfig>
  );
}

/** Existing dotted globe, retained as the product composition's backdrop. */
function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

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
        mapBrightness: 9,
        baseColor: [0.09, 0.11, 0.15],
        markerColor: [0.75, 0.85, 1],
        glowColor: [0.45, 0.4, 0.32],
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
      if (globe && width > 0 && visible && !document.hidden && !reduceMotion) {
        phi += 0.004;
        try {
          globe.update({ phi, width: width * dpr, height: width * dpr });
        } catch {
          /* swallow transient update errors */
        }
      }
      if (!reduceMotion) frameId = requestAnimationFrame(animate);
    };
    if (!reduceMotion) frameId = requestAnimationFrame(animate);

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
  }, [reduceMotion]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 aspect-square w-full opacity-60"
      style={{ maskImage: "radial-gradient(circle, black 35%, transparent 72%)" }}
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
