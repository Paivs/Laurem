// components/ui/animated-section.tsx
import { cn } from "@/lib/utils";

export function AnimatedSection({
  children,
  className,
  delay = 0.1,
  duration = 0.4,
  direction = "up",
}) {
  const style = {
    "--animation-delay": `${delay}s`,
    "--animation-duration": `${duration}s`,
  };

  return (
    <div
      className={cn(`animate-fade-in-${direction}`, className)}
      style={style}
    >
      {children}
    </div>
  );
}
