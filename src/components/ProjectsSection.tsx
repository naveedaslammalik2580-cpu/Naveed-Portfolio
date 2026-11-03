import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";
import ImageSlot from "./ImageSlot";
import { PROJECTS, type PortfolioProject } from "../data/projects";

/**
 * WORK — homepage preview only. Each card shows the project's main
 * screenshot, name and a one-line summary; the full details, more
 * screenshots and live project links live on the single /work page.
 */
export default function ProjectsSection() {
  return (
    <section
      id="work"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#14161B] px-5 pb-24 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
      style={{
        background:
          "radial-gradient(ellipse at 18% 12%, rgba(212,160,55,0.06) 0%, rgba(212,160,55,0.022) 35%, transparent 70%), #14161B",
      }}
    >
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading font-display mb-6 text-center font-bold uppercase leading-none tracking-tight sm:mb-8"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Work
      </FadeIn>

      <FadeIn
        as="p"
        delay={0.08}
        y={24}
        className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-[#D1D5DB] sm:mb-16"
        style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)" }}
      >
        A quick look at the projects — open the Work page for the full details,
        screenshots and links to the actual products.
      </FadeIn>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>

      <FadeIn delay={0.1} y={24} className="mt-12 text-center sm:mt-16">
        <a
          href="/work"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium uppercase tracking-wider text-[#14161B] transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A037]"
          style={{
            background: "var(--gold-gradient)",
            boxShadow: "var(--gold-shadow)",
          }}
        >
          View all work <ArrowRight size={16} aria-hidden="true" />
        </a>
      </FadeIn>
    </section>
  );
}

function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  const mainImage = project.images[0];

  return (
    <FadeIn y={36} delay={(index % 2) * 0.06} className="h-full">
      <a
        href={`/work#${project.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#48505E] bg-[#1C2028] transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#D4A037]/60 hover:shadow-[0_24px_50px_-28px_rgba(212,160,55,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4A037] sm:rounded-[32px]"
        aria-label={`View ${project.name} on the Work page`}
      >
        <span className="block aspect-[16/9] overflow-hidden bg-[#14161B]">
          <ImageSlot
            src={mainImage.src}
            alt={mainImage.alt}
            priority={index < 2}
            style={{ objectPosition: mainImage.position ?? "center top" }}
          />
        </span>

        <span className="flex flex-1 flex-col p-6 sm:p-7">
          <span className="flex items-baseline justify-between gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D1D5DB]/55">
              {project.category}
            </span>
            <span className="font-display text-lg font-semibold tracking-[0.14em] text-[#D4A037]">
              {project.n}
            </span>
          </span>

          <span className="font-display mt-3 text-2xl font-semibold leading-tight text-[#F5F6F8] sm:text-[1.7rem]">
            {project.name}
          </span>

          <span className="mt-3 leading-relaxed text-[#D1D5DB]">
            {project.summary}
          </span>

          <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-[#D4A037]">
            View project details
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </span>
        </span>
      </a>
    </FadeIn>
  );
}
