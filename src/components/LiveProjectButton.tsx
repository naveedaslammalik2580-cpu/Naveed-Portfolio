type LiveProjectButtonProps = {
  label?: string;
  href?: string;
  className?: string;
};

const BASE_CLASS =
  "inline-block rounded-full border-2 font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base ";

/** Outline / ghost pill used on project cards. */
export default function LiveProjectButton({
  label = "Live Project",
  href = "#",
  className = "",
}: LiveProjectButtonProps) {
  // href is still the placeholder "#" until a real project URL is set — render
  // a disabled-looking, non-clickable state instead of linking to the page itself.
  if (!href || href === "#") {
    return (
      <span
        aria-disabled="true"
        className={
          BASE_CLASS +
          "cursor-not-allowed border-[#D1D5DB]/30 text-[#D1D5DB]/40 " +
          className
        }
      >
        Coming soon
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={
        BASE_CLASS +
        "border-[#D1D5DB] text-[#D1D5DB] transition-colors duration-200 hover:bg-[#D1D5DB]/10 " +
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D1D5DB] " +
        className
      }
    >
      {label}
    </a>
  );
}
