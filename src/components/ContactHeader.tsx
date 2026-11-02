const LINKS = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#skills" },
  { label: "Contact", href: "/contact", active: true },
];

/** Static header for the standalone Contact page (same pattern as WorkHeader). */
export default function ContactHeader() {
  return (
    <header
      className="sticky inset-x-0 top-0 z-40"
      style={{
        background: "rgba(20,22,27,0.9)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid #48505E",
        boxShadow: "0 8px 24px -12px rgba(0,0,0,0.5)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 md:px-10">
        <a
          href="/"
          className="font-display text-sm font-bold uppercase tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4A037] sm:text-base"
          style={{ color: "#D4A037" }}
        >
          Naveed Aslam
        </a>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                aria-current={link.active ? "page" : undefined}
                className={
                  "text-sm font-bold uppercase tracking-wider transition-opacity duration-200 hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4A037] " +
                  (link.active
                    ? "text-[#D4A037] underline decoration-[#D4A037] decoration-2 underline-offset-8"
                    : "text-[#E5E7EB]")
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/work"
          className="inline-flex shrink-0 items-center rounded-full px-5 py-2 text-sm font-medium uppercase tracking-widest text-[#14161B] transition-transform duration-200 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A037]"
          style={{
            background: "var(--gold-gradient)",
            boxShadow: "var(--gold-shadow)",
          }}
        >
          See my work
        </a>
      </div>
    </header>
  );
}
