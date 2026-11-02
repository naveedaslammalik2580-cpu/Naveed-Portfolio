import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import ContactButton from "./ContactButton";
import ImageSlot from "./ImageSlot";

const ABOUT_PARAGRAPH_1 =
  "Most projects need two hires: someone to build the product, and someone to make sense of the data it produces. I do both. That means no handoff gaps, no \"that's not my part,\" and one person who understands your system end to end.";

const ABOUT_PARAGRAPH_2 =
  "I work across the full stack — React, Next.js, Node, PostgreSQL — and on the analytics side with Power BI and DAX. In practice that looks like shipping a multi-tenant SaaS platform to production on Azure, then building the semantic models and dashboards that tell a business what's actually happening inside it.";

const ABOUT_PARAGRAPH_3 =
  "I'm based in Pakistan and work remotely with clients on their hours. I reply within a day, I tell you when something won't work instead of quietly building it anyway, and I finish what I start.";

// ⚠️ Put your real photo at public/about.jpg (or .png) and set the path here:
const ABOUT_IMAGE = "/naveed.webp";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center px-5 py-20 sm:px-8 md:px-10"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16">
        {/* Left: photo */}
        <FadeIn x={-40} y={0} duration={0.9} className="w-full">
          <div className="mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[32px] md:mx-0 md:rounded-[40px]">
            <ImageSlot src={ABOUT_IMAGE} alt="Naveed Aslam" label="Add your photo" priority />
          </div>
        </FadeIn>

        {/* Right: text */}
        <div className="flex flex-col items-start gap-8 sm:gap-10">
          <FadeIn
            as="h2"
            delay={0.1}
            y={40}
            className="hero-heading font-display text-left font-bold uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 7vw, 110px)" }}
          >
            One person, accountable for the whole thing.
          </FadeIn>

          <AnimatedText
            text={ABOUT_PARAGRAPH_1}
            className="max-w-[560px] text-left font-medium leading-relaxed text-[#D1D5DB]"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
          />

          <FadeIn
            as="p"
            delay={0.3}
            y={24}
            className="max-w-[560px] text-left font-medium leading-relaxed text-[#D1D5DB]"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
          >
            {ABOUT_PARAGRAPH_2}
          </FadeIn>

          <FadeIn
            as="p"
            delay={0.45}
            y={24}
            className="max-w-[560px] text-left font-medium leading-relaxed text-[#D1D5DB]"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
          >
            {ABOUT_PARAGRAPH_3}
          </FadeIn>

          <ContactButton label="Let's Talk" href="/contact" />
        </div>
      </div>
    </section>
  );
}
