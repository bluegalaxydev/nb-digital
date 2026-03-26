"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "soft" | "strong";
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "strong",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const activeClass =
    variant === "soft" ? "reveal-soft" : "reveal-strong";

  return (
    <div
      ref={ref}
      className={`${className} ${
        visible ? activeClass : "reveal-ltr-hidden"
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}