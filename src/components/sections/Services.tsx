import { Button } from '../ui/Button'

import psychiatricIcon  from '../../assets/figma/svgs/services/s2.svg'
import medicationIcon   from '../../assets/figma/svgs/services/s3.svg'
import psychotherapyIcon from '../../assets/figma/svgs/services/s6.svg'
// s7 already contains a cream circle + the ADHD brain paths — use it without an extra wrapper circle
import adhdFullIcon     from '../../assets/figma/svgs/services/s7.svg'
import matIcon          from '../../assets/figma/svgs/services/s2.svg'
import geneSightIcon    from '../../assets/figma/svgs/services/hospital.svg'

/**
 * Each entry drives one service card.
 *
 * `hasOwnCircle` — when true the SVG already includes its own cream
 * background circle (s7, hospital), so we render it at full 100 px
 * and skip the cream wrapper div.
 */
const serviceItems = [
  {
    title: 'Psychiatric\nEvaluation',
    src: psychiatricIcon,
    alt: 'Brain icon representing psychiatric evaluation',
    iconClass: 'size-11',
    hasOwnCircle: false,
  },
  {
    title: 'Medication\nManagement',
    src: medicationIcon,
    alt: 'Cross icon representing medication management',
    iconClass: 'size-9',
    hasOwnCircle: false,
  },
  {
    title: 'Supportive\nPsychotherapy',
    src: psychotherapyIcon,
    alt: 'Heart icon representing supportive psychotherapy',
    iconClass: 'size-12',
    hasOwnCircle: false,
  },
  {
    title: 'ADHD\nScreening',
    src: adhdFullIcon,
    alt: 'Brain with ADHD text icon representing ADHD screening',
    iconClass: 'size-[100px]',
    hasOwnCircle: true,
  },
  {
    title: 'MAT\nTreatment',
    src: matIcon,
    alt: 'Brain icon representing MAT treatment',
    iconClass: 'size-11',
    hasOwnCircle: false,
  },
  {
    title: 'Gene Sight\nTesting',
    src: geneSightIcon,
    alt: 'Circle with cross icon representing gene sight testing',
    iconClass: 'size-12',
    hasOwnCircle: false,
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-page py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-[1050px] px-5 text-center sm:px-6">
        <h2 className="font-display text-[28px] font-bold sm:text-[32px] md:text-[40px]">Our Services</h2>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:mt-12 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-6">
          {serviceItems.map((service) => (
            <div key={service.title} className="flex flex-col items-center gap-3 sm:gap-4">
              {service.hasOwnCircle ? (
                /* SVG already has its own cream background — render it directly */
                <img
                  src={service.src}
                  alt={service.alt}
                  className={`${service.iconClass} shrink-0 object-contain`}
                />
              ) : (
                /* Wrap icon in a cream circle to match Figma */
                <div className="flex size-[88px] shrink-0 items-center justify-center rounded-full bg-cream sm:size-[100px]">
                  <img
                    src={service.src}
                    alt={service.alt}
                    className={`${service.iconClass} object-contain`}
                  />
                </div>
              )}

              <p className="font-display text-[17px] font-bold leading-snug whitespace-pre-line text-center text-ink sm:text-[20px]">
                {service.title}
              </p>
            </div>
          ))}
        </div>

        <Button href="#contact" className="mt-10 h-[54px] w-full max-w-[298px] font-display sm:mt-12 sm:h-[62px] sm:w-auto sm:min-w-[298px]">
          View our services
        </Button>
      </div>
    </section>
  )
}
