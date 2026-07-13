import {
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type MagnetProps = {
  children: ReactNode;
  /** Distance (px) outside the element edge where the effect activates. */
  padding?: number;
  /** Higher = weaker pull (translation is divided by this). */
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
};

/**
 * Wraps children in a container that drifts toward the cursor while the cursor
 * is within `padding` of the element's bounding box, then eases back to rest.
 */
export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const handleMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;

      const withinX = Math.abs(distX) < rect.width / 2 + padding;
      const withinY = Math.abs(distY) < rect.height / 2 + padding;

      if (withinX && withinY) {
        setActive(true);
        setOffset({ x: distX / strength, y: distY / strength });
      } else {
        setActive(false);
        setOffset({ x: 0, y: 0 });
      }
    },
    [padding, strength]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [handleMove]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: active ? activeTransition : inactiveTransition,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
