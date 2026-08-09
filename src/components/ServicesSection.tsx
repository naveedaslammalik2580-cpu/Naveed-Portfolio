import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";
import ImageSlot from "./ImageSlot";

const SERVICES = [
  {
    n: "01",
    name: "A working web application",
    desc: "Full-stack builds from empty repo to live URL. React or Next.js on the front, Node and PostgreSQL behind it, deployed and running on your domain. Multi-tenant, auth, roles — the parts that are tedious to get right.",
  },
  {
    n: "02",
    name: "Power BI dashboards your team actually opens",
    desc: "A proper semantic model underneath, not a screenshot with charts on it. Date tables, clean relationships, a DAX measure library, and a report that answers the questions your team keeps asking manually.",
  },
  {
    n: "03",
    name: "Rescuing data that's stuck in spreadsheets",
    desc: "If your numbers live across exports, tabs, and one person's laptop, I consolidate them into a model that updates itself and a report anyone can read.",
  },
  {
    n: "04",
    name: "WordPress sites you can update without a developer",
    desc: "Custom themes with editable content fields, so changing a section doesn't mean emailing me. Built to your design, handed over maintainable.",
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
        Four ways I get hired.
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

          <FadeIn
            delay={SERVICES.length * 0.08}
            className="mt-10 flex flex-col items-start gap-4 sm:mt-12 sm:gap-5 md:mt-16"
          >
            <p
              className="max-w-md font-light leading-relaxed text-[#0C0C0C]"
              style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)", opacity: 0.6 }}
            >
              Not sure which one you need? Tell me the problem and
              I&apos;ll tell you honestly whether I&apos;m the right person
              for it.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--gold-solid)] px-6 py-3 sm:px-8 sm:py-3.5 font-medium text-[#0C0C0C] transition-colors duration-200 hover:bg-[var(--gold-solid-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C0C0C]"
              style={{ fontSize: "clamp(1rem, 1.8vw, 1.3rem)" }}
            >
              Let&apos;s talk
              <ArrowRight size={18} />
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
