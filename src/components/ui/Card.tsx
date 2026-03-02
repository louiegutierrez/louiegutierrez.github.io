import type { HTMLAttributes } from "react";
import { cn } from "./cn";

export type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-slate-900/40 p-6 shadow-[0_20px_80px_-40px_rgba(16,185,129,0.5)] backdrop-blur-sm",
        className
      )}
      {...props}
    />
  );
}
