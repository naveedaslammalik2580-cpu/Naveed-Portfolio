import { useState, type FormEvent } from "react";
import FadeIn from "./FadeIn";

// ⚠️ Free access key (no backend) from https://web3forms.com — supplied at
// build time via the VITE_WEB3FORMS_KEY environment variable (Netlify).
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string;

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full rounded-2xl bg-[#14161B]/95 backdrop-blur-sm border border-[#343944] " +
  "px-5 py-4 text-[#A9ADB7] placeholder:text-[#A9ADB7]/60 outline-none " +
  "shadow-[0_6px_20px_-8px_rgba(0,0,0,0.7)] transition-colors " +
  "focus:border-[#A9ADB7]/70 focus:ring-1 focus:ring-[#A9ADB7]/40";

/** The message form — lives on the /contact page (moved out of the footer). */
export default function ContactForm() {
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

  if (status === "success") {
    return (
      <FadeIn delay={0.1} className="w-full">
        <div
          className="rounded-2xl border px-6 py-10 text-[#A9ADB7]"
          style={{
            borderColor: "rgba(52,57,68,0.2)",
            background: "#1C2028",
          }}
        >
          <p className="text-lg font-medium uppercase tracking-wide">
            Message sent — thanks!
          </p>
          <p className="mt-2 text-sm text-[#A9ADB7]/70">
            I&apos;ll get back to you soon.
          </p>
        </div>
      </FadeIn>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4 text-left">
      {/* honeypot spam trap — leave hidden */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        className="hidden"
        aria-hidden="true"
      />

      <label htmlFor="contact-name" className="sr-only">
        Your name
      </label>
      <input
        id="contact-name"
        type="text"
        name="name"
        required
        placeholder="Your name"
        className={fieldClass}
      />

      <label htmlFor="contact-email" className="sr-only">
        Your email
      </label>
      <input
        id="contact-email"
        type="email"
        name="email"
        required
        placeholder="Your email"
        className={fieldClass}
      />

      <label htmlFor="contact-message" className="sr-only">
        Tell me about your project
      </label>
      <textarea
        id="contact-message"
        name="message"
        required
        rows={5}
        placeholder="Tell me about your project"
        className={fieldClass + " resize-none"}
      />

      {status === "error" && (
        <p role="alert" className="text-sm text-red-400">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 inline-block self-center rounded-full px-12 py-4 text-sm font-medium uppercase tracking-widest text-[#14161B] transition-transform duration-200 hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A037]"
        style={{
          background: "var(--gold-gradient)",
          boxShadow: "var(--gold-shadow)",
        }}
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      <p className="text-center text-xs text-[#A9ADB7]/50">
        No obligation. If I&apos;m not the right fit, I&apos;ll say so.
      </p>
    </form>
  );
}
