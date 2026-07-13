import { type CSSProperties, type ReactNode, useMemo } from "react";
import { motion } from "framer-motion";

type FadeInProps = {
  children: ReactNode;
  /** HTML tag to render. Defaults to "div". */
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
};

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

/**
 * Scroll-triggered reveal. Fades + slides in once, when the element enters
 * the viewport. Uses motion.create() so the rendered tag is configurable.
 */
export default function FadeIn({
  children,
  as = "div",
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
}: FadeInProps) {
  // motion.create() is memoized so we don't recreate the component each render.
  const MotionTag = useMemo(() => motion.create(as), [as]);

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}
