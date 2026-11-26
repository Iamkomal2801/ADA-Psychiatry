import { ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navItems } from '../../data/site'
import { Button } from '../ui/Button'
import { Logo } from '../ui/Logo'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 h-[72px] bg-black text-white md:h-[83px]">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-5 md:px-10">
        <a href="#top" className="flex items-center gap-2.5 sm:gap-3 md:gap-5">
          <Logo className="h-9 w-9 sm:h-10 sm:w-10 md:h-[46px] md:w-[46px]" />
          <span className="font-display text-[15px] font-semibold leading-none tracking-[2px] sm:text-[16px] sm:tracking-[3px] md:text-[18px]">
            Ada Psychiatry
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex xl:gap-[46px]" aria-label="Primary">
          {navItems.map((item) => (
            <div key={item.label} className="group relative">
              <a
                href={item.href}
                className="inline-flex items-center gap-1.5 font-sans text-[14px] font-medium tracking-[0.01em] text-white transition-opacity duration-200 hover:opacity-80"
              >
                {item.label}
                {'children' in item ? (
                  <ChevronDown
                    className="size-4 opacity-90 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                    strokeWidth={1.5}
                  />
                ) : null}
              </a>
              {'children' in item ? (
                <div className="invisible absolute left-0 top-full z-20 min-w-48 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="rounded-md bg-white py-2 text-ink shadow-lg">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 font-sans text-sm hover:bg-cream"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
          <Button
            href="#contact"
            showArrow={false}
            className="h-[46px] w-[209px] px-0 text-[14px] font-medium"
          >
            Book an Appointment
          </Button>
        </nav>

        <button
          type="button"
          className="lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </div>

      {open ? (
        <div className="absolute inset-x-0 top-[72px] max-h-[calc(100svh-72px)] overflow-y-auto border-t border-white/10 bg-black px-5 py-6 shadow-xl md:top-[83px] md:max-h-[calc(100svh-83px)] lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {navItems.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  className="font-sans text-base font-medium"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
                {'children' in item ? (
                  <div className="mt-2 ml-3 flex flex-col gap-2 text-sm text-white/80">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <Button
              href="#contact"
              showArrow={false}
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Book an Appointment
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
