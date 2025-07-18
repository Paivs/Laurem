"use client";
import { useEffect, useState, useRef } from "react";
import { motion, easeOut } from "framer-motion";

export const NumberUp = ({
  value,
  duration = 2,
  className,
  ...motionProps
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateNumber();
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Dispara quando 10% do elemento estiver visível
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  const animateNumber = () => {
    const end = typeof value === "number" ? value : parseFloat(value) || 0;
    if (end === 0) {
      setDisplayValue(0);
      return;
    }

    let startTimestamp = null;
    const animationDuration = duration * 1000; // ms

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / animationDuration, 1);
      const easedProgress = easeOut(progress);
      const currentValue = Math.floor(easedProgress * end);

      setDisplayValue(currentValue);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  return (
    <motion.span ref={ref} className={className} {...motionProps}>
      {Math.floor(displayValue).toLocaleString()}
    </motion.span>
  );
};