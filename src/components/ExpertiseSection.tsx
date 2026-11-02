import { Layers, BarChart3, Workflow, ArrowRight, type LucideIcon } from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiPrisma,
  SiPython,
  SiFastapi,
  SiPandas,
} from "react-icons/si";
import { VscAzure, VscGraph } from "react-icons/vsc";
import type { IconType, IconBaseProps } from "react-icons";
import FadeIn from "./FadeIn";

/** PostgreSQL + Supabase share one row in Card 1 — rendered as a paired mark. */
function PgSupabaseMark({ size }: IconBaseProps) {
  const s = typeof size === "number" ? size : 16;
  return (
    <span className="inline-flex items-center -space-x-1">
      <SiPostgresql size={s} />
      <SiSupabase size={s} />
    </span>
  );
}

type TechMark = { name: string; Icon?: IconType };

type Expertise = {
  Icon: LucideIcon;
  title: string;
  description: string;
  tech: TechMark[];
};

const EXPERTISE: Expertise[] = [
  {
    Icon: Layers,
    title: "Full-Stack Web Applications",
    description:
      "I build web applications that run in production, not demos — multi-tenant systems with authentication, role-based access, and the failure handling that keeps them working when a service goes down. You get it deployed on your own infrastructure and documented well enough that another developer could pick it up.",
    tech: [
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "React", Icon: SiReact },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Node", Icon: SiNodedotjs },
      { name: "PostgreSQL / Supabase", Icon: PgSupabaseMark },
      { name: "Prisma", Icon: SiPrisma },
      { name: "Azure", Icon: VscAzure },
    ],
  },
  {
    Icon: BarChart3,
    title: "Power BI & Business Intelligence",
    description:
      "Most dashboards are charts sitting on messy data. I build the model underneath first — date tables, clean relationships, a documented DAX measure library — so the numbers still hold up when your team slices them by region, product, or month.",
    tech: [
      { name: "Power BI", Icon: VscGraph },
      { name: "DAX" },
      { name: "SQL" },
      { name: "Python", Icon: SiPython },
    ],
  },
  {
    Icon: Workflow,
    title: "Data Engineering & Automation",
    description:
      "When your numbers are trapped across exports, spreadsheets, and someone else's system, I build the pipeline that moves and cleans them — Python services, scheduled jobs, generated Excel reports. The weekly manual process stops being manual.",
    tech: [
      { name: "Python", Icon: SiPython },
      { name: "FastAPI", Icon: SiFastapi },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "Pandas", Icon: SiPandas },
    ],
  },
];

export default function ExpertiseSection() {
  return (
    <section className="bg-[#14161B] px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32">
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading font-display text-center font-bold uppercase leading-none tracking-tight"
        style={{ fontSize: "clamp(2.5rem, 8vw, 120px)" }}
      >
        Core Expertise
      </FadeIn>

      <FadeIn
        as="p"
        delay={0.1}
        y={24}
        className="mx-auto mt-5 max-w-xl text-center font-normal leading-relaxed text-[#D1D5DB]/70 sm:mt-6"
        style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)" }}
      >
        Three areas, not thirty — and the work behind each one.
      </FadeIn>

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:mt-16 sm:gap-7 md:grid-cols-3 md:gap-8">
        {EXPERTISE.map((item, i) => (
          <ExpertiseCard key={item.title} item={item} delay={i * 0.1} />
        ))}
      </div>

      <p className="mx-auto mt-12 max-w-6xl text-center sm:mt-16">
        <a
          href="/work"
          className="text-sm font-medium uppercase tracking-wider text-[#D4A037] underline-offset-4 transition-opacity duration-200 hover:opacity-70 hover:underline"
        >
          See what I&apos;ve built with this
          <ArrowRight size={14} className="ml-1.5 inline-block align-[-1px]" />
        </a>
      </p>
    </section>
  );
}

function ExpertiseCard({ item, delay }: { item: Expertise; delay: number }) {
  const { Icon, title, description, tech } = item;
  return (
    <FadeIn delay={delay} y={30} className="h-full">
      <div className="group flex h-full flex-col gap-6 rounded-[32px] border-2 border-[#48505E] bg-[#14161B] p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[var(--gold-solid)]/50 hover:shadow-[var(--gold-shadow)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:rounded-[36px] sm:p-7 md:p-8">
        <Icon size={30} strokeWidth={1.5} style={{ color: "var(--gold-solid)" }} />

        <div className="flex flex-col gap-3">
          <h3
            className="font-display font-semibold uppercase text-[#F5F6F8]"
            style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
          >
            {title}
          </h3>
          <p
            className="font-light leading-relaxed text-[#D1D5DB]"
            style={{ fontSize: "clamp(0.85rem, 1.4vw, 1rem)" }}
          >
            {description}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 border-t border-[#48505E] pt-5">
          {tech.map((t) => (
            <span
              key={t.name}
              className="inline-flex items-center gap-1.5 text-[#D1D5DB] opacity-60 transition-opacity duration-300 group-hover:opacity-100"
            >
              {t.Icon && <t.Icon size={14} className="shrink-0" />}
              <span className="text-[11px] font-medium uppercase tracking-wide">
                {t.name}
              </span>
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
