import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import ContactButton from "./ContactButton";
import ImageSlot from "./ImageSlot";

const ABOUT_PARAGRAPH =
  "I work across three roles that most people split between three hires. As a software engineer I care about the part under the surface — architecture, structure, code that scales instead of cracking. As a full-stack developer I take it all the way to production, frontend to backend. And as a data analyst I turn what the product does into numbers people can decide on. Same standard at every stage: build it right, and make it prove itself.";

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
            <ImageSlot src={ABOUT_IMAGE} alt="Naveed Aslam" label="Add your photo" />
          </div>
        </FadeIn>

        {/* Right: text */}
        <div className="flex flex-col items-start gap-8 sm:gap-10">
          <FadeIn
            as="h2"
            delay={0.1}
            y={40}
            className="hero-heading text-left font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 7vw, 110px)" }}
          >
            About me
          </FadeIn>

          <AnimatedText
            text={ABOUT_PARAGRAPH}
            className="max-w-[560px] text-left font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
          />

          <ContactButton label="Let's Talk" href="#contact" />
        </div>
      </div>
    </section>
  );
}
