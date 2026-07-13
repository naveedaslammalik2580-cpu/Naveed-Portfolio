type LiveProjectButtonProps = {
  label?: string;
  href?: string;
  className?: string;
};

/** Outline / ghost pill used on project cards. */
export default function LiveProjectButton({
  label = "Live Project",
  href = "#",
  className = "",
}: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={
        "inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] " +
        "font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 " +
        "text-sm sm:text-base transition-colors duration-200 hover:bg-[#D7E2EA]/10 " +
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA] " +
        className
      }
    >
      {label}
    </a>
  );
}
