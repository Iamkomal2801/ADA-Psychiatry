import quoteBandSvg from '../../assets/figma/svgs/quote-band.svg'

export function QuoteBand() {
  return (
    <section className="relative overflow-hidden bg-page py-14 sm:py-16 md:h-[241px] md:py-0">
      <img
        src={quoteBandSvg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover md:object-fill"
      />
      <div className="relative z-10 mx-auto flex h-full max-w-[906px] flex-col items-center justify-center px-5 text-center sm:px-6">
        <p
          className="font-display text-[64px] font-bold leading-[0.45] text-gold-deep sm:text-[72px] md:text-[100px]"
          aria-hidden="true"
        >
          “
        </p>
        <p className="mt-3 font-display text-[22px] font-bold leading-snug text-white sm:text-2xl md:mt-5 md:text-[32px] md:leading-[36px]">
          “We help people living with and experiencing difficult times”
        </p>
      </div>
    </section>
  )
}
