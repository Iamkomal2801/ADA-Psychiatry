import founderWaveSvg from '../../assets/figma/svgs/founder-wave.svg'
import { founder } from '../../data/site'
import { Button } from '../ui/Button'

export function Founder() {
  return (
    <section id="founder" className="relative bg-cream py-14 pb-20 md:py-16 md:pb-24 lg:h-[590px] lg:py-0 lg:pt-[90px]">
      <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-10">

        {/* ── Mobile / tablet: stacked ── */}
        <div className="mx-auto flex max-w-[680px] flex-col gap-6 sm:gap-8 lg:hidden">
          <img
            src={founder.image}
            alt="Lakeisha Appleton, founder of Ada Psychiatry"
            loading="lazy"
            className="h-[240px] w-full rounded-[20px] object-cover object-top sm:h-[320px] md:h-[380px]"
          />
          <div
            className="rounded-[20px] border-2 border-[#DAA520] bg-cream p-6 sm:p-10"
          >
            <h2 className="!font-display text-[28px] font-bold leading-tight text-black sm:text-3xl">
              Meet The Founder
            </h2>
            <p className="mt-3 font-display text-[20px] font-bold leading-snug text-black sm:mt-4">
              Lakeisha Appleton
            </p>
            <p className="mt-1 font-sans text-[15px] font-semibold text-black">
              FNP-C, PMHNP- BC
            </p>
            <p className="mt-4 font-sans text-[15px] leading-[1.65] text-black sm:text-[17px]">
              {founder.quote}
            </p>
            <Button href="#contact" className="mt-6 h-[46px] min-w-[140px] px-5 text-[14px]">
              Learn More
            </Button>
          </div>
        </div>

        {/* ── Desktop: photo overlaps card ── */}
        {/*
          Figma specs:
          Card:  722 × 410px, border 2px #DAA520, radius 20px, padding 40px
          Photo: overlaps left edge of card, extends ~200px beyond card left
          Text group inside card: 514 × 248, left-padded to clear the photo
        */}
        <div className="relative hidden lg:flex lg:h-[460px] lg:items-center">

          {/* Photo — absolutely left, overlaps card */}
          <img
            src={founder.image}
            alt="Lakeisha Appleton, founder of Ada Psychiatry"
            loading="lazy"
            className="absolute left-0 z-20 h-[280px] w-[390px] rounded-[20px] object-cover object-top shadow-sm xl:h-[330px] xl:w-[503px]"
          />

          {/* Card — 722×410 at xl, scaled cleanly at lg so photo never covers text */}
          <div
            className="absolute top-[25px] right-0 z-10 flex min-h-[410px] w-[600px] flex-col justify-center rounded-[20px] border-2 border-[#DAA520] bg-cream py-10 pr-10 pl-[95px] xl:w-[722px] xl:pr-[70px] xl:pl-[130px]"
          >
            <h2 className="font-display text-[32px] font-bold leading-tight text-black xl:text-[36px]">
              Meet The Founder
            </h2>
            <p className="mt-3 font-display text-[22px] font-bold leading-snug text-black xl:text-[24px]">
              Lakeisha Appleton
            </p>
            <p className="mt-1 font-sans text-[18px] font-medium text-black xl:text-[20px]">
              FNP-C, PMHNP- BC
            </p>
            <p className="mt-4 font-sans text-[18px] leading-[26px] text-black xl:text-[20px]">
              {founder.quote}
            </p>
             <Button
                  href="#contact"
                  variant="primary"
                  showArrow={true}
                  className="mt-7 h-[50px] w-[170px] px-0 font-sans text-[15px] font-medium text-black"
                >
                  Learn More
                </Button>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <img
        src={founderWaveSvg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[44px] w-full translate-y-[43px] object-cover object-bottom md:h-[56px] md:translate-y-[47px]"
      />
    </section>
  )
}
