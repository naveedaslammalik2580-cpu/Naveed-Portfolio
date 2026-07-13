import { type CSSProperties, useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  className?: string;
  style?: CSSProperties;
};

/**
 * Reveals text one word at a time as the paragraph scrolls through the
 * viewport. Each word fades from 0.2 -> 1 opacity based on its position
 * in the string relative to overall scroll progress.
 */
export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <span key={i}>
            <Word progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
            {i < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </p>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span style={{ position: "relative", display: "inline" }}>
      {/* Invisible placeholder preserves layout; animated span sits on top. */}
      <span style={{ opacity: 0.2 }}>{children}</span>
      <motion.span
        style={{
          opacity,
          position: "absolute",
          left: 0,
          top: 0,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}
