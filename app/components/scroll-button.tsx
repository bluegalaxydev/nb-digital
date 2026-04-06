"use client";

export default function ScrollButton({
  target,
  children,
  className,
}: {
  target: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() =>
        document.getElementById(target)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
      className={className}
    >
      {children}
    </button>
  );
}
