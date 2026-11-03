import { useEffect } from "react";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import FadeIn from "./FadeIn";
import ContactForm from "./ContactForm";

export const CONTACT_EMAIL = "naveed.aslam0119@gmail.com";
export const CONTACT_LINKEDIN = "https://www.linkedin.com/in/naveed-aslam-dev";
export const CONTACT_WHATSAPP = "https://wa.me/923296136483";

const DIRECT = [
  {
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    action: "Write an email",
    Icon: Mail,
    external: false,
  },
  {
    label: "WhatsApp",
    value: "+92 329 6136483",
    href: CONTACT_WHATSAPP,
    action: "Chat on WhatsApp",
    Icon: FaWhatsapp,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: CONTACT_LINKEDIN,
    action: "Open LinkedIn",
    Icon: Linkedin,
    external: true,
  },
];

const NEXT_STEPS = [
  {
    n: "01",
    title: "You send the problem",
    text: "What's broken, what you need built, or what your data isn't telling you — a few lines is enough to start.",
  },
  {
    n: "02",
    title: "I reply within a day",
    text: "An honest answer on whether I can help, what it would take, and what it would cost — no obligation.",
  },
  {
    n: "03",
    title: "We agree the scope, then I build",
    text: "If it's a fit, we fix the scope and timeline up front, and I keep you updated while the work ships.",
  },
];

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact — Naveed Aslam | Software Engineer";
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#14161B]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px]"
        style={{
          background:
            "radial-gradient(ellipse at 88% 0%, rgba(212,160,55,0.06) 0%, rgba(20,22,27,0) 62%)",
        }}
        aria-hidden="true"
      />

      <section className="relative mx-auto max-w-6xl px-5 pb-24 pt-14 sm:px-8 sm:pt-20 md:px-10">
        <FadeIn
          as="p"
          y={16}
          className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.24em] text-[#D4A037] sm:text-sm"
        >
          Contact
        </FadeIn>

        <FadeIn
          as="h1"
          y={32}
          className="font-display mx-auto max-w-[850px] text-center text-[clamp(2.75rem,5vw,4.5rem)] font-semibold leading-[1.12] tracking-tight text-[#F5F6F8]"
        >
          Tell me what you&apos;re <span className="text-[#D4A037]">building.</span>
        </FadeIn>

        <FadeIn
          as="p"
          delay={0.1}
          y={24}
          className="mx-auto mt-6 max-w-[760px] text-center text-base font-normal leading-[1.6] text-[#D1D5DB] sm:text-lg"
        >
          Send me the problem — what&apos;s broken, what you need built, or what
          your data isn&apos;t telling you. I&apos;ll reply within a day with an
          honest answer on whether I can help and what it would take.
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
          {/* Left: direct ways + what happens next */}
          <div>
            <FadeIn y={28}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5F6F8]">
                Reach me directly
              </h2>
              <div className="mt-5 flex flex-col gap-4">
                {DIRECT.map(({ label, value, href, action, Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="group flex items-center gap-4 rounded-2xl border border-[#48505E] bg-[#1C2028] px-5 py-4 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#D4A037]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A037]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D4A037]/15 text-[#D4A037]">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-[#CBD5E1]">
                        {label}
                      </span>
                      <span className="block truncate text-[15px] font-medium text-[#F5F6F8]">
                        {value}
                      </span>
                    </span>
                    <span className="inline-flex shrink-0 items-center gap-1 text-xs font-medium uppercase tracking-wider text-[#D4A037]">
                      {action}
                      <ArrowUpRight
                        size={14}
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </a>
                ))}
              </div>
            </FadeIn>

            <FadeIn y={28} delay={0.08}>
              <h2 className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5F6F8]">
                What happens next
              </h2>
              <ol className="mt-5 flex flex-col">
                {NEXT_STEPS.map((step, i) => (
                  <li
                    key={step.n}
                    className={
                      "flex gap-5 py-5 " +
                      (i < NEXT_STEPS.length - 1
                        ? "border-b border-[#48505E]"
                        : "")
                    }
                  >
                    <span className="font-display text-base font-semibold tracking-[0.14em] text-[#D4A037]">
                      {step.n}
                    </span>
                    <span>
                      <span className="block font-medium text-[#F5F6F8]">
                        {step.title}
                      </span>
                      <span className="mt-1 block leading-relaxed text-[#CBD5E1]">
                        {step.text}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </FadeIn>
          </div>

          {/* Right: the form */}
          <FadeIn y={32} delay={0.1}>
            <div className="rounded-2xl border border-[#48505E] bg-[#1C2028] p-6 sm:p-8">
              <h2 className="font-display text-2xl font-semibold text-[#F5F6F8]">
                Send a message
              </h2>
              <p className="mb-7 mt-2 leading-relaxed text-[#D1D5DB]">
                Three fields, one minute. Your message comes straight to me —
                no assistants, no ticket system.
              </p>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
