import { useState } from 'react'
import { faqs } from '../../data/site'
import { Accordion } from '../ui/Accordion'
import { Button } from '../ui/Button'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="bg-page pt-14 pb-16 sm:pt-16 md:pt-[74px] md:pb-20"
    >
      <div className="mx-auto max-w-[860px] px-5 sm:px-6">

        {/* Heading — Abhaya Libre Bold 40px / lh 58px */}
        <h2 className="text-center font-display text-[28px] font-bold leading-tight text-ink sm:text-[34px] md:text-[40px] md:leading-[58px]">
          Frequently asked questions
        </h2>

        {/* Accordion with gold #C18C2C top border + dividers */}
        <div className="mt-8 border-t sm:mt-10" style={{ borderColor: '#C18C2C' }}>
          <Accordion
            items={faqs.map((item) => ({ title: item.q, body: item.a }))}
            openIndex={openIndex}
            onToggle={(i) => setOpenIndex((prev) => (prev === i ? null : i))}
            titleClassName="font-display text-[18px] font-bold text-ink md:text-[20px]"
            bodyClassName="font-sans text-[15px] leading-[1.7] text-ink md:text-[16px]"
            iconColor="text-ink"
            itemPaddingClassName="py-4 sm:py-5"
          />
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center sm:mt-10">
          <Button href="#faq" variant="faq" className="h-14 w-full max-w-[335px] sm:w-auto sm:min-w-[335px]">
            See all FAQ
          </Button>
        </div>
      </div>
    </section>
  )
}
