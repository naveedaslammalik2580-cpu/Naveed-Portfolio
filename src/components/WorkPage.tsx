import { useEffect, useState } from "react";
import { ArrowRight, Check, ChevronLeft, ChevronRight, X } from "lucide-react";
import FadeIn from "./FadeIn";
import ImageSlot from "./ImageSlot";
import LiveProjectButton from "./LiveProjectButton";
import { PROJECTS, type PortfolioProject, type ProjectImage } from "../data/projects";

type LightboxState = {
  images: ProjectImage[];
  index: number;
} | null;

export default function WorkPage() {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  useEffect(() => {
    document.title = "Work — Naveed Aslam | Software Engineer";

    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView();
    }, 100);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!lightbox) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "ArrowLeft") {
        setLightbox((current) =>
          current
            ? {
                ...current,
                index:
                  (current.index - 1 + current.images.length) %
                  current.images.length,
              }
            : current,
        );
      }
      if (event.key === "ArrowRight") {
        setLightbox((current) =>
          current
            ? {
                ...current,
                index: (current.index + 1) % current.images.length,
              }
            : current,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightbox]);

  const openLightbox = (project: PortfolioProject, index: number) => {
    setLightbox({ images: project.images, index });
  };

  return (
    <div className="relative overflow-hidden bg-[#0C0C0C]">
      {/* soft radial wash, echoing the home hero */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px]"
        style={{
          background:
            "radial-gradient(ellipse at 88% 0%, #171d27 0%, rgba(12,12,12,0) 62%)",
        }}
        aria-hidden="true"
      />

      <section className="relative mx-auto max-w-6xl px-5 pb-4 pt-14 sm:px-8 sm:pt-20 md:px-10">
        <FadeIn
          as="p"
          y={16}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#C6902E] sm:text-sm"
        >
          Selected Work
        </FadeIn>

        <FadeIn
          as="h1"
          y={32}
          className="font-display max-w-3xl text-[clamp(2.4rem,6vw,4.7rem)] font-semibold leading-[1.04] tracking-tight text-[#EEF2F6]"
        >
          Work that&apos;s live — <span className="text-[#C6902E]">and working.</span>
        </FadeIn>

        <FadeIn
          as="p"
          delay={0.1}
          y={24}
          className="mt-6 max-w-2xl text-base font-normal leading-relaxed text-[#D7E2EA]/80 sm:text-lg"
        >
          Real projects, shown one by one with their details and screenshots.
          Where a project is public, the button takes you to the actual product
          so you can try it yourself.
        </FadeIn>

        <FadeIn delay={0.18} y={20}>
          <nav aria-label="Project index" className="mt-9 flex flex-wrap gap-2.5">
            {PROJECTS.map((project) => (
              <a
                key={project.slug}
                href={`#${project.slug}`}
                className="rounded-full border border-[#D7E2EA]/15 bg-[#12161E] px-4 py-2 text-sm text-[#D7E2EA] transition-colors duration-200 hover:border-[#C6902E]/60 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6902E]"
              >
                <span className="mr-2 font-semibold text-[#E0B44A]">{project.n}</span>
                {project.name}
              </a>
            ))}
          </nav>
        </FadeIn>
      </section>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 md:px-10">
        {PROJECTS.map((project, index) => (
          <ProjectBlock
            key={project.slug}
            project={project}
            flip={index % 2 === 1}
            onOpen={openLightbox}
          />
        ))}
      </div>

      <section className="relative mx-auto max-w-6xl px-5 pb-24 pt-4 sm:px-8 md:px-10">
        <FadeIn y={32}>
          <div className="rounded-[32px] border border-[#D7E2EA]/15 bg-[#12161E] px-6 py-12 text-center sm:rounded-[40px] sm:px-10 sm:py-16">
            <h2 className="font-display mx-auto max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Have a project like one of these in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-[#D7E2EA]/75">
              Tell me the problem — I&apos;ll tell you honestly whether I&apos;m
              the right person for it.
            </p>
            <a
              href="/#contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium uppercase tracking-wider text-[#0C0C0C] transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6902E]"
              style={{
                background: "var(--gold-gradient)",
                boxShadow: "var(--gold-shadow)",
              }}
            >
              Let&apos;s talk <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </FadeIn>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot viewer"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 z-10 rounded-full border border-white/30 bg-black/40 p-2.5 text-white hover:bg-white/10 sm:right-5 sm:top-5"
            aria-label="Close screenshot viewer"
          >
            <X size={22} />
          </button>

          {lightbox.images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setLightbox((current) =>
                  current
                    ? {
                        ...current,
                        index:
                          (current.index - 1 + current.images.length) %
                          current.images.length,
                      }
                    : current,
                );
              }}
              className="absolute left-2 z-10 rounded-full border border-white/30 bg-black/40 p-2.5 text-white hover:bg-white/10 sm:left-6"
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={26} />
            </button>
          )}

          <img
            src={lightbox.images[lightbox.index].src}
            alt={lightbox.images[lightbox.index].alt}
            decoding="async"
            className="max-h-[86vh] max-w-[92vw] rounded-xl object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />

          {lightbox.images.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setLightbox((current) =>
                  current
                    ? {
                        ...current,
                        index: (current.index + 1) % current.images.length,
                      }
                    : current,
                );
              }}
              className="absolute right-2 z-10 rounded-full border border-white/30 bg-black/40 p-2.5 text-white hover:bg-white/10 sm:right-6"
              aria-label="Next screenshot"
            >
              <ChevronRight size={26} />
            </button>
          )}

          <span className="absolute bottom-5 text-sm uppercase tracking-widest text-white/70">
            {lightbox.index + 1} / {lightbox.images.length}
          </span>
        </div>
      )}
    </div>
  );
}

function ProjectBlock({
  project,
  flip,
  onOpen,
}: {
  project: PortfolioProject;
  flip: boolean;
  onOpen: (project: PortfolioProject, index: number) => void;
}) {
  return (
    <article id={project.slug} className="scroll-mt-24 py-8 sm:py-10">
      <FadeIn y={36}>
        <div className="rounded-[32px] border border-[#D7E2EA]/20 bg-[#10141B] p-5 shadow-[0_24px_60px_-32px_rgba(0,0,0,0.8)] sm:rounded-[40px] sm:p-8 lg:p-10">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-12">
            <div className={flip ? "lg:order-2" : ""}>
              <div className="flex items-center gap-4">
                <span className="font-display text-lg font-semibold tracking-[0.18em] text-[#C6902E]">
                  {project.n}
                </span>
                <span className="h-px flex-1 bg-[#D7E2EA]/10" aria-hidden="true" />
                <span className="text-right text-[11px] font-semibold uppercase tracking-[0.14em] text-[#D7E2EA]/55">
                  Project {project.n}
                </span>
              </div>

              <h2 className="font-display mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                {project.name}
              </h2>

              <span className="mt-4 inline-block rounded-full border border-[#C6902E]/70 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#E0B44A]">
                {project.category}
              </span>

              <p className="mt-6 leading-relaxed text-[#C4D0DB]">
                {project.introduction}
              </p>

              <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                What I built
              </h3>
              <ul className="mt-4 space-y-3">
                {project.built.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-[#D7E2EA]/80">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C6902E]/15 text-[#E0B44A]">
                      <Check size={13} strokeWidth={2.5} aria-hidden="true" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-[#D7E2EA]/10 bg-[#181F2A] px-2.5 py-1.5 text-xs text-[#D7E2EA]/75"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                {project.liveUrl ? (
                  <div className="flex flex-wrap items-center gap-4">
                    <LiveProjectButton
                      href={project.liveUrl}
                      label="Visit Live Project"
                      className="!px-7 !py-3 text-sm sm:!px-8"
                    />
                    <a
                      href="/#contact"
                      className="inline-flex items-center gap-2 py-3 text-sm font-medium text-[#E0B44A] transition-opacity duration-200 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6902E]"
                    >
                      Start something similar <ArrowRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                ) : (
                  <p className="inline-block rounded-lg border border-dashed border-[#D7E2EA]/25 px-4 py-3 text-sm italic leading-relaxed text-[#D7E2EA]/60">
                    {project.accessNote}
                  </p>
                )}
              </div>
            </div>

            <div className={flip ? "lg:order-1" : ""}>
              <ScreenshotFrame
                image={project.images[0]}
                label={project.galleryLabel}
                priority
                onClick={() => onOpen(project, 0)}
              />

              <div className="mt-3 grid grid-cols-2 gap-3 sm:mt-4 sm:gap-4">
                {project.images.slice(1).map((image, imageIndex) => (
                  <ScreenshotFrame
                    key={image.src}
                    image={image}
                    onClick={() => onOpen(project, imageIndex + 1)}
                    compact
                  />
                ))}
              </div>

              <p className="mt-3 text-center text-[11px] uppercase tracking-[0.16em] text-[#D7E2EA]/45">
                Select a screenshot to enlarge
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </article>
  );
}

function ScreenshotFrame({
  image,
  label,
  onClick,
  priority = false,
  compact = false,
}: {
  image: ProjectImage;
  label?: string;
  onClick: () => void;
  priority?: boolean;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group block w-full overflow-hidden rounded-[22px] border border-[#D7E2EA]/15 bg-[#0D0E11] text-left shadow-[0_18px_40px_-24px_rgba(0,0,0,0.9)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6902E]"
      aria-label={`Enlarge screenshot: ${image.alt}`}
    >
      {label && (
        <span className="flex items-center gap-2 border-b border-[#D7E2EA]/10 bg-[#0B0E13] px-4 py-2.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <i className="block h-2.5 w-2.5 rounded-full bg-[#2B3547]" />
            <i className="block h-2.5 w-2.5 rounded-full bg-[#2B3547]" />
            <i className="block h-2.5 w-2.5 rounded-full bg-[#2B3547]" />
          </span>
          <span className="truncate text-xs text-[#D7E2EA]/50">{label}</span>
        </span>
      )}
      <span className={"block overflow-hidden " + (compact ? "aspect-[16/10]" : "aspect-[16/10]")}>
        <ImageSlot
          src={image.src}
          alt={image.alt}
          priority={priority}
          style={{ objectPosition: image.position ?? "center top" }}
        />
      </span>
    </button>
  );
}
