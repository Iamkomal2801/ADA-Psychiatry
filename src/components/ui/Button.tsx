import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'outline' | 'faq'
  className?: string
  showArrow?: boolean
  onClick?: () => void
}

const variants = {
  primary: 'bg-gold-gradient text-black hover:brightness-105',
  outline: 'border border-gold bg-transparent text-black hover:bg-gold/10',
  faq: 'bg-[linear-gradient(90deg,#cea341_0%,#e8d16b_49.8%,#f0df78_100%)] text-black hover:brightness-105',
}

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  showArrow = true,
  onClick,
}: ButtonProps) {
  // twMerge ensures later/className classes override base classes properly
  const classes = twMerge(
    'inline-flex items-center justify-center gap-2 rounded-[50px] px-6 py-3 font-sans text-base font-medium transition-[transform,filter] duration-200 hover:scale-[1.02] active:scale-[0.98]',
    variants[variant],
    className,
  )

  const content = (
    <>
      {children}
      {showArrow ? <ArrowRight className="size-[18px] shrink-0" strokeWidth={1.6} /> : null}
    </>
  )

  if (!href) {
    return (
      <button type="button" className={classes} onClick={onClick}>
        {content}
      </button>
    )
  }

  return (
    <a href={href} className={classes} onClick={onClick}>
      {content}
    </a>
  )
}
