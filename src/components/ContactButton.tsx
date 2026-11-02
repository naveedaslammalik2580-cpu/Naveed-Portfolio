type ContactButtonProps = {
  label?: string;
  href?: string;
  className?: string;
};

/**
 * Filled gradient pill CTA. Renders as an anchor so it can point at a mailto:
 * or the contact page.
 */
export default function ContactButton({
  label = "Let's Talk",
  href = "/contact",
  className = "",
}: ContactButtonProps) {
  return (
    <a
      href={href}
      className={
        "inline-block rounded-full text-[#111827] font-medium uppercase tracking-widest " +
        "px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 " +
        "text-xs sm:text-sm md:text-base transition-transform duration-200 hover:scale-[1.03] " +
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D6A13A] " +
        className
      }
      style={{
        background: "var(--gold-gradient)",
        boxShadow: "var(--gold-shadow)",
      }}
    >
      {label}
    </a>
  );
}
