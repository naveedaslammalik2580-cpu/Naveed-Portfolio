import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";
import ImageSlot from "./ImageSlot";

const SERVICES = [
  {
    n: "01",
    name: "Software Engineering",
    desc: "Clean architecture and sensible structure — systems designed to hold up, not systems that turn into a rewrite six months later.",
  },
  {
    n: "02",
    name: "Full-Stack Development",
    desc: "Complete products shipped end to end in React, Next.js, and Node — frontend to backend, design to deployment, live in production.",
  },
  {
    n: "03",
    name: "Data Analysis & BI",
    desc: "Power BI dashboards and data models that turn what a product does into numbers a team can actually act on.",
  },
  {
    n: "04",
    name: "API & Backend Systems",
    desc: "Reliable, workspace-scoped backend systems built for isolation and scale — the part under the surface that has to hold up.",
  },
];

// ⚠️ Put a vertical/portrait image at public/services.webp and set the path here:
const SERVICES_IMAGE = "/services.webp";

export default function ServicesSection() {
  return (
    <section
      id="skills"
      className="bg-white rounded-t-[40px] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn
        as="h2"
        y={40}
        className="font-display mb-14 text-center font-bold uppercase text-[#0C0C0C] sm:mb-16 md:mb-24"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Services
      </FadeIn>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-14">
        {/* Left: sticky image (hidden on mobile to keep the list clean) */}
        <FadeIn x={-40} y={0} duration={0.9} className="hidden md:block">
          <div className="sticky top-24 aspect-[3/4] w-full overflow-hidden rounded-[32px] md:rounded-[40px]">
            <ImageSlot
              src={SERVICES_IMAGE}
              alt="Naveed Aslam at work"
              label="Add a vertical image"
            />
          </div>
        </FadeIn>

        {/* Right: services list */}
        <div>
          {SERVICES.map((s, i) => (
            <FadeIn
              key={s.n}
              delay={i * 0.08}
              className={
                "flex items-start gap-5 py-8 sm:gap-6 sm:py-10 md:py-12" +
                (i === SERVICES.length - 1
                  ? " services-row services-row--last"
                  : " services-row")
              }
            >
              <span
                className="font-display tabular-nums shrink-0 font-bold leading-none text-[#0C0C0C]"
                style={{ fontSize: "clamp(2rem, 8vw, 120px)" }}
              >
                {s.n}
              </span>
              <div className="flex flex-col gap-3 pt-1 sm:pt-2 md:pt-3">
                <h3
                  className="font-display font-semibold uppercase text-[#0C0C0C]"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {s.name}
                </h3>
                <p
                  className="font-light leading-relaxed text-[#0C0C0C]"
                  style={{
                    fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
                    opacity: 0.6,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={SERVICES.length * 0.08} className="mt-10 sm:mt-12 md:mt-16">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-medium text-[#0C0C0C] transition-opacity duration-200 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C0C0C]"
              style={{ fontSize: "clamp(1rem, 1.8vw, 1.3rem)" }}
            >
              Need all of this in one person? Let&apos;s talk
              <ArrowRight size={18} style={{ color: "#C6902E" }} />
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
