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
          "cursor-not-allowed border-[#A9ADB7]/30 text-[#A9ADB7]/40 " +
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
        "border-[#A9ADB7] text-[#A9ADB7] transition-colors duration-200 hover:bg-[#A9ADB7]/10 " +
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9ADB7] " +
        className
      }
    >
      {label}
    </a>
  );
}
