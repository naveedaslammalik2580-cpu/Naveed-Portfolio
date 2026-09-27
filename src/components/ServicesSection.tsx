import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";
import ImageSlot from "./ImageSlot";

const SERVICES = [
  {
    n: "01",
    name: "A business website that actually does its job",
    desc: "Whether you don't have a website yet, or the one you have is slow, hard to use on a phone, or missing the things customers actually need — I build sites that load fast, look right on every screen, and make it easy for people to contact you or book with you. Custom-coded or WordPress, depending on what fits. Handed over so you can update text and add pages without emailing me every time.",
    linkLabel: "See business website projects",
    href: "#work",
  },
  {
    n: "02",
    name: "Custom web apps & SaaS platforms",
    desc: "Full-stack builds from empty repo to live URL. Next.js, Node, PostgreSQL — multi-tenant architecture, authentication, role-based access, the parts that are tedious to get right. Best for founders who need real software shipped without hiring a team, and for businesses that have outgrown a marketing site.",
    linkLabel: "See software projects",
    href: "#work",
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
        Two ways I get hired.
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
                <a
                  href={s.href}
                  className="inline-flex items-center gap-2 font-medium text-[#0C0C0C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C0C0C]"
                >
                  {s.linkLabel}
                  <ArrowRight size={18} />
                </a>
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
