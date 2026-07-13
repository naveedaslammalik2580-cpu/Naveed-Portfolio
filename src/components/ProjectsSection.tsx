import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import FadeIn from "./FadeIn";
import LiveProjectButton from "./LiveProjectButton";
import ImageSlot from "./ImageSlot";

/**
 * WORK — 3 project cards, each fading in as it scrolls into view.
 *
 * ⚠️ IMAGES: each project needs 3 real screenshots (col1a, col1b, col2 = 9
 * total). Drop files in /public/work/ and set the paths below, e.g.
 * col1a: "/work/tetramagnet-1.png". Empty strings render labeled placeholders.
 */
type Project = {
  n: string;
  category: string;
  name: string;
  desc: string;
  href: string;
  img: { col1a: string; col1b: string; col2: string };
};

const PROJECTS: Project[] = [
  {
    n: "01",
    category: "Engineering",
    name: "TetraMagnet",
    desc: "A multi-tenant email outreach platform — dual sending providers, scheduled campaigns, and workspace-scoped data, built for reliability.",
    href: "#",
    img: {
      col1a: "/work/tetramagnet-features.webp",
      col1b: "/work/tetramagnet-dashboard.webp",
      col2: "/work/tetramagnet-home.webp",
    },
  },
  {
    n: "02",
    category: "Data Analysis",
    name: "Retail Sales & Shipments",
    desc: "A multi-page Power BI dashboard for retail sales and logistics — one semantic model, a shared DAX library, and a consistent theme.",
    href: "#",
    img: {
      col1a: "/work/retail-performance.webp",
      col1b: "/work/retail-shipment.webp",
      col2: "/work/retail-overview.webp",
    },
  },
  {
    n: "03",
    category: "Full-Stack",
    name: "NewRevert Academy",
    desc: "A content-managed WordPress theme built from a static design — editable where it matters, handed off for non-technical staff to run.",
    href: "#",
    img: {
      col1a: "/work/newrevert-roadmap.webp",
      col1b: "/work/newrevert-features.webp",
      col2: "/work/newrevert-home.webp",
    },
  },
];

export default function ProjectsSection() {
  const [lightbox, setLightbox] = useState<{ images: string[]; alts: string[]; index: number } | null>(null);

  const openLightbox = (images: string[], alts: string[], index: number) => {
    const kept = images
      .map((src, i) => ({ src, alt: alts[i] }))
      .filter((item) => item.src);
    setLightbox({
      images: kept.map((item) => item.src),
      alts: kept.map((item) => item.alt),
      index,
    });
  };

  useEffect(() => {
    if (!lightbox) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft")
        setLightbox((l) => l && { ...l, index: (l.index - 1 + l.images.length) % l.images.length });
      if (e.key === "ArrowRight")
        setLightbox((l) => l && { ...l, index: (l.index + 1) % l.images.length });
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightbox]);

  return (
    <section
      id="work"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pt-20 pb-10 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
    >
      <h2 className="hero-heading mb-8 text-center font-black uppercase leading-none tracking-tight sm:mb-12 md:mb-16"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Work
      </h2>

      <div>
        {PROJECTS.map((project, i) => (
          <Card key={project.n} project={project} index={i} onOpen={openLightbox} />
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 rounded-full border border-white/30 p-2.5 text-white hover:bg-white/10 sm:right-5 sm:top-5"
            aria-label="Close"
          >
            <X size={22} />
          </button>

          {/* Prev */}
          {lightbox.images.length > 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setLightbox((l) => l && ({ ...l, index: (l.index - 1 + l.images.length) % l.images.length })); }}
              className="absolute left-2 sm:left-6 rounded-full border border-white/30 p-2.5 text-white hover:bg-white/10"
              aria-label="Previous"
            >
              <ChevronLeft size={26} />
            </button>
          )}

          {/* Image */}
          <img
            src={lightbox.images[lightbox.index]}
            alt={lightbox.alts[lightbox.index]}
            decoding="async"
            className="max-h-[88vh] max-w-[92vw] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          {lightbox.images.length > 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setLightbox((l) => l && ({ ...l, index: (l.index + 1) % l.images.length })); }}
              className="absolute right-2 sm:right-6 rounded-full border border-white/30 p-2.5 text-white hover:bg-white/10"
              aria-label="Next"
            >
              <ChevronRight size={26} />
            </button>
          )}

          {/* Counter */}
          <span className="absolute bottom-5 text-sm uppercase tracking-widest text-white/70">
            {lightbox.index + 1} / {lightbox.images.length}
          </span>
        </div>
      )}
    </section>
  );
}

function Card({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (images: string[], alts: string[], index: number) => void;
}) {
  const gallery = [
    { src: project.img.col2, alt: project.name + " — overview screenshot" },
    { src: project.img.col1a, alt: project.name + " — detail screenshot 1" },
    { src: project.img.col1b, alt: project.name + " — detail screenshot 2" },
  ].filter((item) => item.src);
  const galleryImages = gallery.map((item) => item.src);
  const galleryAlts = gallery.map((item) => item.alt);

  return (
    <div className="mb-16 flex justify-center sm:mb-20 md:mb-24">
      <FadeIn y={40} delay={index * 0.05} className="w-full max-w-5xl">
        <div className="flex w-full flex-col rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8">
          {/* Top row */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4 sm:mb-6">
            <div className="flex items-center gap-4 sm:gap-6">
              <span
                className="font-black leading-none text-[#D7E2EA]"
                style={{ fontSize: "clamp(2.25rem, 9vw, 140px)" }}
              >
                {project.n}
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">
                  {project.category}
                </span>
                <span
                  className="font-medium uppercase text-[#D7E2EA]"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {project.name}
                </span>
              </div>
            </div>
            <LiveProjectButton href={project.href} />
          </div>

          {/* Description */}
          <p
            className="mb-4 max-w-3xl shrink-0 font-light leading-relaxed text-[#D7E2EA]/80 sm:mb-6"
            style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
          >
            {project.desc}
          </p>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-[60%_40%] sm:gap-4">
            {/* Left column: one big image */}
            <div
              className={
                "aspect-video w-full overflow-hidden rounded-[24px] bg-[#0d0e11] sm:aspect-auto sm:h-full sm:rounded-[32px] md:rounded-[40px]" +
                (project.img.col2 ? " cursor-pointer" : "")
              }
              role={project.img.col2 ? "button" : undefined}
              tabIndex={project.img.col2 ? 0 : undefined}
              onClick={project.img.col2 ? () => onOpen(galleryImages, galleryAlts, galleryImages.indexOf(project.img.col2)) : undefined}
            >
              <ImageSlot src={project.img.col2} alt={project.name + " — overview screenshot"} className="bg-[#0d0e11]" priority={index === 0} />
            </div>

            {/* Right column: two stacked images */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <div
                className={
                  "aspect-video w-full overflow-hidden rounded-[20px] bg-[#0d0e11] sm:rounded-[24px] md:rounded-[28px]" +
                  (project.img.col1a ? " cursor-pointer" : "")
                }
                role={project.img.col1a ? "button" : undefined}
                tabIndex={project.img.col1a ? 0 : undefined}
                onClick={project.img.col1a ? () => onOpen(galleryImages, galleryAlts, galleryImages.indexOf(project.img.col1a)) : undefined}
              >
                <ImageSlot src={project.img.col1a} alt={project.name + " — detail screenshot 1"} className="bg-[#0d0e11]" />
              </div>
              <div
                className={
                  "aspect-video w-full overflow-hidden rounded-[20px] bg-[#0d0e11] sm:rounded-[24px] md:rounded-[28px]" +
                  (project.img.col1b ? " cursor-pointer" : "")
                }
                role={project.img.col1b ? "button" : undefined}
                tabIndex={project.img.col1b ? 0 : undefined}
                onClick={project.img.col1b ? () => onOpen(galleryImages, galleryAlts, galleryImages.indexOf(project.img.col1b)) : undefined}
              >
                <ImageSlot src={project.img.col1b} alt={project.name + " — detail screenshot 2"} className="bg-[#0d0e11]" />
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
