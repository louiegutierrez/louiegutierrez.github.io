import type { HTMLAttributes } from 'react';
import { cn } from './cn';

export type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-transparent bg-[rgba(13,20,32,0.72)] p-6 shadow-[0_18px_60px_-34px_rgba(15,23,42,0.85)] backdrop-blur-md',
        className,
      )}
      {...props}
    />
  );
}
