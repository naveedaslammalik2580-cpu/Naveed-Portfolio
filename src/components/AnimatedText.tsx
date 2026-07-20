import { type CSSProperties } from "react";
import { motion } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  className?: string;
  style?: CSSProperties;
};

/**
 * Reveals text one word at a time, once, as the paragraph scrolls into view.
 * Each word settles permanently at full opacity after it animates in —
 * unlike a scroll-linked reveal, it doesn't depend on the user continuing
 * to scroll past the element.
 */
export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <p className={className} style={style}>
      {words.map((word, i) => (
        <span key={i}>
          <motion.span
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.4, delay: i * 0.015, ease: "easeOut" }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
