import { useState, type FormEvent } from "react";
import { Linkedin, Mail, ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import FadeIn from "./FadeIn";

// ⚠️ Replace these 3 with your real details:
const EMAIL = "YOUR_EMAIL@example.com";
const LINKEDIN = "https://www.linkedin.com/in/naveed-aslam-dev";
const WHATSAPP = "https://wa.me/923296136483";
// ⚠️ Free access key (no backend) from https://web3forms.com — paste it here:
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string;

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full rounded-2xl bg-[#0d0e11]/95 backdrop-blur-sm border border-[rgba(215,226,234,0.28)] " +
  "px-5 py-4 text-[#D7E2EA] placeholder:text-[#D7E2EA]/60 outline-none " +
  "shadow-[0_6px_20px_-8px_rgba(0,0,0,0.7)] transition-colors " +
  "focus:border-[#D7E2EA]/70 focus:ring-1 focus:ring-[#D7E2EA]/40";

export default function Footer() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_KEY);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(json.message || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error — please email me directly.");
    }
  }

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#0C0C0C] px-5 pt-24 pb-16 sm:px-8 sm:pt-28 md:px-10 md:pt-36"
    >
      {/* Background photo (anchored low) + dimming overlays */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/footer-bg.webp')",
          backgroundPosition: "center 85%",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(90% 70% at 50% 40%, rgba(12,12,12,0.82) 0%, rgba(12,12,12,0.55) 55%, rgba(12,12,12,0.4) 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, #0C0C0C 0%, rgba(12,12,12,0.5) 30%, rgba(12,12,12,0.55) 70%, #0C0C0C 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-8 text-center sm:gap-10">
        <FadeIn
          as="h2"
          y={40}
          className="hero-heading font-display font-bold uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 10vw, 150px)" }}
        >
          Let&apos;s work together
        </FadeIn>

        <FadeIn delay={0.15}>
          <p
            className="max-w-md font-medium uppercase tracking-wide text-[#E0B44A]"
            style={{ fontSize: "clamp(0.8rem, 1.5vw, 1.15rem)", textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}
          >
            Have a product to build or data to make sense of? Send a message.
          </p>
        </FadeIn>

        {status === "success" ? (
          <FadeIn delay={0.1} className="w-full max-w-xl">
            <div
              className="rounded-2xl border px-6 py-10 text-[#D7E2EA]"
              style={{
                borderColor: "rgba(215,226,234,0.2)",
                background: "#141518",
              }}
            >
              <p className="text-lg font-medium uppercase tracking-wide">
                Message sent — thanks!
              </p>
              <p className="mt-2 text-sm text-[#D7E2EA]/70">
                I&apos;ll get back to you soon.
              </p>
            </div>
          </FadeIn>
        ) : (
          <FadeIn delay={0.2} className="w-full max-w-xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
              {/* honeypot spam trap — leave hidden */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                className="hidden"
                aria-hidden="true"
              />
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className={fieldClass}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className={fieldClass}
              />
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project"
                className={fieldClass + " resize-none"}
              />

              {status === "error" && (
                <p className="text-sm text-red-400">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 inline-block self-center rounded-full px-12 py-4 text-sm font-medium uppercase tracking-widest text-white transition-transform duration-200 hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{
                  background:
                    "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
                  boxShadow:
                    "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
                  outline: "2px solid #FFFFFF",
                  outlineOffset: "-3px",
                }}
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
            </form>
          </FadeIn>
        )}

        <FadeIn
          delay={0.3}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8"
        >
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 py-2 text-sm uppercase tracking-widest text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70">
            <Mail size={18} /> Email
          </a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="flex items-center gap-2 py-2 text-sm uppercase tracking-widest text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70">
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center gap-2 py-2 text-sm uppercase tracking-widest text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70">
            <FaWhatsapp size={18} /> WhatsApp
          </a>
        </FadeIn>
      </div>

      <div
        className="relative z-10 mx-auto mt-16 flex max-w-3xl flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row"
        style={{ borderColor: "rgba(215,226,234,0.12)" }}
      >
        <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50">
          © {new Date().getFullYear()} Naveed Aslam
        </span>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 py-2 text-xs uppercase tracking-widest text-[#D7E2EA]/70 transition-opacity duration-200 hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA]"
        >
          Back to top <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
