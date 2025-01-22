"use client";

import { cn } from "@/lib/utils";

interface BadgeCustomProps {
  color?: string;
  children: React.ReactNode;
}

export function BadgeCustom({ color, children }: BadgeCustomProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
        "border border-transparent shadow-sm"
      )}
      style={{
        backgroundColor: color ? `${color}20` : "hsl(var(--primary))",
        color: color || "hsl(var(--primary))",
      }}
    >
      {children}
    </span>
  );
}