import { steps } from '../../data/site'
import { Button } from '../ui/Button'

import calendarIcon  from '../../assets/figma/svgs/steps/step-1-calendar.svg'
import handshakeIcon from '../../assets/figma/svgs/steps/st9.svg'
import chatIcon      from '../../assets/figma/svgs/steps/st10.svg'
import clipboardIcon from '../../assets/figma/svgs/steps/step-4-clipboard.svg'

const stepIcons = [calendarIcon, handshakeIcon, chatIcon, clipboardIcon]

const ICON_H = 56   
const ICON_W = 56   

export function GetStarted() {
  return (
    <section
      className="relative py-16 text-white md:py-[72px]"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      {/* Top gold line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[3px]"
        style={{ background: 'linear-gradient(90deg,#c18c2c 0%,#fcf38a 50%,#c18c2c 100%)' }}
      />
      {/* Bottom gold line */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px]"
        style={{ background: 'linear-gradient(90deg,#c18c2c 0%,#fcf38a 50%,#c18c2c 100%)' }}
      />

      <div className="mx-auto max-w-[1240px] px-5 text-center sm:px-6">

        {/* Heading */}
        <h2 className="mx-auto max-w-[520px] font-display text-[28px] font-bold text-gold-gradient sm:text-[32px] md:text-[42px] md:leading-[1.35]">
          Four Simple Steps To Get Started
        </h2>

        {/* ── Desktop grid ── */}
        <div className="mt-14 hidden lg:grid lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.n} className="relative flex flex-col items-center">

              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute"
                  style={{
                    top:   ICON_H / 2,
                    left:  `calc(50% + ${ICON_W / 2 + 32}px)`,
                    right: `calc(-50% + ${ICON_W / 2 + 32}px)`,
                    borderTop: '1.5px dashed rgba(255,255,255,0.4)',
                  }}
                />
              )}

              {/* Icon */}
              <img
                src={stepIcons[index]}
                alt={step.title}
                style={{ width: ICON_W, height: ICON_H }}
                className="object-contain"
              />

              {/* Step number — Abhaya Libre Bold 28px / lh 40px, gold gradient */}
              <p className="mt-2 font-display text-[28px] font-bold leading-[40px] text-gold-gradient">
                {step.n}
              </p>

              {/* Label — white, small, centred */}
              <p className="mt-1 max-w-[200px] text-center font-display text-[14px] leading-[1.55] text-white/90">
                {step.title}
              </p>
            </div>
          ))}
        </div>

        {/* ── Mobile / tablet ── */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-14 sm:grid-cols-2 sm:gap-10 lg:hidden">
          {steps.map((step, index) => (
            <div key={step.n} className="flex flex-col items-center">
              <img
                src={stepIcons[index]}
                alt={step.title}
                style={{ width: ICON_W, height: ICON_H }}
                className="object-contain"
              />
              <p className="mt-2 font-display text-[28px] font-bold leading-[40px] text-gold-gradient">
                {step.n}
              </p>
              <p className="mt-1 max-w-[220px] text-center font-display text-[15px] leading-[1.55] text-white/90 sm:text-[14px]">
                {step.title}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Button href="#contact" className="mt-12 h-[54px] w-full max-w-[299px] font-display sm:mt-14 sm:h-[60px] sm:w-auto sm:min-w-[299px]" showArrow={false}>
          Schedule a Call &nbsp;→
        </Button>
      </div>
    </section>
  )
}
