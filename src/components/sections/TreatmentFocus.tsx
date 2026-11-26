import { treatments } from '../../data/site'
import { Button } from '../ui/Button'

// Figma: each column = 553.12 × 562.5px at desktop (equal width & height)
const COL = 'w-full md:w-1/2 md:min-h-[430px] lg:w-[553px] lg:h-[562px]'

export function TreatmentFocus() {
  return (
    <section id="treatment" className="bg-page pb-16 pt-20 md:pb-24 md:pt-[90px]">
      <div className="mx-auto max-w-[1140px] px-5 sm:px-6 lg:mt-[30px]">
        <h2 className="text-center font-display text-[28px] font-bold text-black sm:text-[32px] md:text-[37px] md:leading-tight">
          Our Treatment Focus
        </h2>

        <div className="mt-8 flex flex-col gap-10 md:mt-0 md:gap-4 lg:gap-0">
          {treatments.map((item) => (
            <article
              key={item.title}
              className={`flex flex-col md:flex-row md:items-center md:gap-8 lg:gap-0 ${
                item.imageSide === 'right' ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* ── Image column — circle centred ── */}
              <div className={`${COL} flex items-center justify-center py-6 md:py-0`}>
                <div className="relative size-[240px] sm:size-[300px] md:size-[290px] lg:size-[350px] xl:size-[390px]">
                  {/* Offset gold ring */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 translate-x-[12px] translate-y-[12px] rounded-full border-[2px] border-gold-deep md:translate-x-[16px] md:translate-y-[16px]"
                  />
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                    className="relative z-10 size-full rounded-full object-cover"
                  />
                </div>
              </div>

              {/* ── Text column — content vertically centred ── */}
              <div className={`${COL} flex flex-col justify-center px-0 pb-4 md:pb-0`}>
                <h3 className="font-display text-[26px] font-bold leading-snug text-black sm:text-[28px] md:text-[32px]">
                  {item.title}
                </h3>
                <p className="mt-3 font-display text-[16px] font-normal leading-[1.8] text-black md:text-[18px] md:leading-[1.85]">
                  {item.body}
                </p>
                <Button
                  href="#contact"
                  variant="primary"
                  showArrow={false}
                  className="mt-7 h-[52px] w-[180px] font-display text-[15px] font-medium"
                >
                  Learn More
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
