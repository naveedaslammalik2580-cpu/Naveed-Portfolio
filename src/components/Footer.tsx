import { ArrowRight, ArrowUp, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import FadeIn from "./FadeIn";

// Contact details — also used on the /contact page (kept in sync there).
const EMAIL = "naveed.aslam0119@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/naveed-aslam-dev";
const WHATSAPP = "https://wa.me/923296136483";

const contactButtonClass =
  "inline-flex items-center gap-2 rounded-full border border-[#343944] " +
  "bg-[#14161B]/70 backdrop-blur-sm px-6 py-3 text-sm font-medium uppercase tracking-widest " +
  "text-[#A9ADB7] shadow-[0_6px_20px_-8px_rgba(0,0,0,0.7)] transition-colors duration-200 " +
  "hover:bg-[#A9ADB7] hover:text-[#14161B] focus-visible:outline focus-visible:outline-2 " +
  "focus-visible:outline-offset-2 focus-visible:outline-[#D4A037]";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#14161B]">
      {/* Background photo (anchored low) + dimming overlays */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/footer-bg.webp')",
          backgroundPosition: "center 85%",
        }}
        aria-hidden="true"
      />
      {/* less image, more dark: solid wash + bottom fade into pure #14161B so the footer ends dark */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(20,22,27,0.66) 0%, rgba(20,22,27,0.52) 45%, rgba(20,22,27,0.9) 80%, #14161B 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-5 pb-20 pt-24 text-center sm:px-8 sm:pt-28">
        {/* Heading */}
        <FadeIn
          as="h2"
          y={60}
          className="font-display text-[clamp(2.2rem,7vw,84px)] font-semibold leading-[1.05] tracking-tight text-[#F5F6F8]"
        >
          Tell me what you&apos;re building.
        </FadeIn>

        <FadeIn
          as="p"
          delay={0.1}
          y={30}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#A9ADB7]/85 sm:text-lg"
        >
          Send me the problem on the contact page, or reach me directly —
          I&apos;ll reply within a day with an honest answer on whether I can
          help and what it would take.
        </FadeIn>

        {/* Primary: go to the contact page */}
        <FadeIn delay={0.16} y={20} className="mt-9">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full px-10 py-4 text-sm font-medium uppercase tracking-widest text-[#14161B] transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A037]"
            style={{
              background: "var(--gold-gradient)",
              boxShadow: "var(--gold-shadow)",
            }}
          >
            Go to the contact page
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </FadeIn>

        {/* Direct contact links */}
        <FadeIn delay={0.2} y={20}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${EMAIL}`} className={contactButtonClass}>
              <Mail size={18} /> Email
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className={contactButtonClass}
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className={contactButtonClass}
            >
              <FaWhatsapp size={18} /> WhatsApp
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Bottom bar: copyright + back-to-top, grouped and centered */}
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-5 px-5 pb-10 sm:px-8">
        <p className="text-xs text-[#A9ADB7]/60">
          © {new Date().getFullYear()} Naveed Aslam. All rights reserved.
        </p>
        <a
          href="#hero"
          aria-label="Back to top"
          className="inline-flex items-center justify-center rounded-full border border-[#343944] bg-[#14161B]/70 text-[#A9ADB7] transition-all duration-200 hover:scale-[1.05] hover:bg-[#A9ADB7] hover:text-[#14161B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          style={{ width: 48, height: 48 }}
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
}
