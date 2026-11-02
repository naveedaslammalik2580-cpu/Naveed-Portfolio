import { type CSSProperties, useState } from "react";

type ImageSlotProps = {
  /** Real image URL/import. Leave empty to show a labeled placeholder. */
  src?: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  /** Short label shown in the placeholder state. */
  label?: string;
  /** "cover" (default) crops to fill; "contain" fits the whole image, letterboxed. */
  fit?: "cover" | "contain";
  /** Set true for images visible at/near the top of the page on load (skips lazy-loading). */
  priority?: boolean;
};

/**
 * Drop-in <img> replacement. While `src` is empty it shows a styled placeholder
 * (so the layout renders before real screenshots exist). Supply `src` — a
 * public path like "/work/tetramagnet-1.png" or an imported asset — to go live.
 */
export default function ImageSlot({
  src,
  alt,
  className = "",
  style,
  label = "Add image",
  fit = "cover",
  priority = false,
}: ImageSlotProps) {
  const [loaded, setLoaded] = useState(false);

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={
          (fit === "contain" ? "object-contain" : "object-cover") +
          " w-full h-full transition-opacity duration-500 " +
          (loaded ? "opacity-100" : "opacity-0") +
          " " +
          className
        }
        style={style}
      />
    );
  }

  return (
    <div
      className={
        "w-full h-full flex items-center justify-center text-center select-none " +
        className
      }
      style={{
        background:
          "repeating-linear-gradient(45deg, #14161B 0px, #14161B 12px, #1C2028 12px, #1C2028 24px)",
        border: "1px dashed rgba(72,80,94,0.25)",
        color: "rgba(72,80,94,0.55)",
        ...style,
      }}
      role="img"
      aria-label={alt}
    >
      <span className="text-[0.7rem] sm:text-xs uppercase tracking-widest px-3">
        {label}
      </span>
    </div>
  );
}
