import { useState } from 'react'
import { whyChoose, whyImage } from '../../data/site'
import { Accordion } from '../ui/Accordion'

export function WhyChoose() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="why" className="bg-cream py-14 sm:py-16 md:py-[90px]">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-10 xl:grid-cols-[627px_1fr] xl:px-[84px]">
        <div className="relative mx-auto w-full max-w-[627px]">
          <div className="absolute top-4 left-4 hidden h-full w-full border border-gold md:block xl:top-6 xl:left-6" />
          <img
            src={whyImage}
            alt="People talking together on a sofa"
            className="relative z-10 h-[240px] w-full object-cover sm:h-[320px] md:h-[400px] xl:h-[441px]"
          />
        </div>
        <div className="mx-auto w-full max-w-[627px] lg:mx-0 lg:max-w-[547px]">
          <h2 className="mb-6 max-w-[483px] font-display text-[28px] font-bold leading-tight sm:mb-8 sm:text-[32px] md:text-[40px] md:leading-[47.5px]">
            Why Should You Choose Ada Psychiatry?
          </h2>
          <Accordion
            items={whyChoose}
            openIndex={openIndex}
            onToggle={(i) => setOpenIndex((prev) => (prev === i ? null : i))}
          />
        </div>
      </div>
    </section>
  )
}
