'use client';

import { cn } from '@/lib/utils';

type BadgeProps = {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'outline' | 'dark' | 'success';
  className?: string;
};

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-white/20 text-white backdrop-blur-md border border-white/20',
    accent: 'bg-accent text-dark font-bold border border-accent',
    outline: 'bg-transparent text-accent border border-accent',
    dark: 'bg-dark text-white border border-white/10',
    success: 'bg-[#25D366] text-white border border-[#25D366]',
  };

  return (
    <span
      className={cn(
        'px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
