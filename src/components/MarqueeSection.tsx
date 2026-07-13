import { useEffect, useRef, useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiSupabase,
  SiPython,
  SiGit,
  SiFigma,
} from "react-icons/si";
import { VscGraph } from "react-icons/vsc";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import type { IconType } from "react-icons";

function tint(hex: string, alpha: number) {
  const n = parseInt(hex.replace("#", ""), 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * MARQUEE — content option (b): tech-stack tiles.
 *
 * The scroll mechanics below are unchanged from the brief. To switch to
 * option (a) (real project screenshots), keep the two <div className="flex">
 * rows and the transform logic exactly as-is, and replace <Tile> with an
 * <ImageSlot> (420x270) fed by your real screenshots — still tripling the set
 * for the seamless loop.
 */

type Tech = { name: string; icon: IconType; accent: string };

const TECH: Tech[] = [
  { name: "React", icon: SiReact, accent: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, accent: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, accent: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, accent: "#3C873A" },
  { name: "Tailwind CSS", icon: SiTailwindcss, accent: "#38BDF8" },
  { name: "PostgreSQL", icon: SiPostgresql, accent: "#4169E1" },
  { name: "Supabase", icon: SiSupabase, accent: "#3ECF8E" },
  { name: "Power BI", icon: VscGraph, accent: "#F2C811" },
  { name: "Excel / VBA", icon: PiMicrosoftExcelLogoFill, accent: "#217346" },
  { name: "Python", icon: SiPython, accent: "#FFD43B" },
  { name: "Git", icon: SiGit, accent: "#F05033" },
  { name: "Figma", icon: SiFigma, accent: "#F24E1E" },
];

const half = Math.ceil(TECH.length / 2);
const ROW_1 = TECH.slice(0, half);
const ROW_2 = TECH.slice(half);

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.offsetTop;
      const value =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(value);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const row1X = offset - 200;
  const row2X = -(offset - 200);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#0C0C0C] pt-24 pb-10 sm:pt-32 md:pt-40"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1 — moves right */}
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${row1X}px)`,
            willChange: "transform",
          }}
        >
          {[...ROW_1, ...ROW_1, ...ROW_1].map((tech, i) => (
            <Tile key={`r1-${i}`} tech={tech} />
          ))}
        </div>

        {/* Row 2 — moves left */}
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${row2X}px)`,
            willChange: "transform",
          }}
        >
          {[...ROW_2, ...ROW_2, ...ROW_2].map((tech, i) => (
            <Tile key={`r2-${i}`} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Tile({ tech }: { tech: Tech }) {
  const Icon = tech.icon;
  return (
    <div
      className="group relative flex w-[280px] h-[180px] sm:w-[420px] sm:h-[270px] shrink-0 flex-col items-start justify-between overflow-hidden rounded-2xl p-5 sm:p-8 transition-transform duration-300 hover:-translate-y-1"
      style={{
        background: `radial-gradient(130% 90% at 18% 12%, ${tint(
          tech.accent,
          0.22
        )} 0%, transparent 55%), linear-gradient(160deg, #202227 0%, #17181c 60%, #121316 100%)`,
        border: `1px solid ${tint(tech.accent, 0.35)}`,
        boxShadow: "0 1px 0 rgba(255,255,255,0.06) inset, 0 20px 45px -22px rgba(0,0,0,0.9)",
      }}
    >
      {/* Brand-color glow that intensifies on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(120% 80% at 20% 10%, ${tint(
            tech.accent,
            0.35
          )} 0%, transparent 60%)`,
          boxShadow: `0 0 40px -6px ${tint(tech.accent, 0.45)} inset`,
        }}
      />
      <Icon size={56} color={tech.accent} className="relative z-10" />
      <span
        className="relative z-10 font-medium uppercase tracking-wide text-[#EAF0F5]"
        style={{ fontSize: "clamp(1.4rem, 2vw, 2rem)" }}
      >
        {tech.name}
      </span>
    </div>
  );
}
