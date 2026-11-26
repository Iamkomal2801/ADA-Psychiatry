import { useId, useRef, useState } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { heroSlides } from '../../data/site'
import { Button } from '../ui/Button'
import 'swiper/css'

function HexDot({ active, onClick }: { active: boolean; onClick: () => void }) {
  const gradId = useId()
  return (
    <button
      type="button"
      aria-label={active ? 'Current slide' : 'Go to slide'}
      onClick={onClick}
      className="flex size-5 items-center justify-center transition-transform duration-200 hover:scale-110"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
        {active && (
          <defs>
            <linearGradient id={gradId} x1="0" y1="10" x2="20" y2="10" gradientUnits="userSpaceOnUse">
              <stop offset="0%"      stopColor="#c18c2c" />
              <stop offset="50.52%" stopColor="#fcf38a" />
              <stop offset="100%"   stopColor="#c18c2c" />
            </linearGradient>
          </defs>
        )}
        <polygon
          points="10,1.5 17.8,5.75 17.8,14.25 10,18.5 2.2,14.25 2.2,5.75"
          fill={active ? `url(#${gradId})` : 'transparent'}
          stroke="#daa520"
          strokeWidth={active ? 0 : 1}
        />
      </svg>
    </button>
  )
}

export function Hero() {
  const swiperRef = useRef<SwiperType | null>(null)
  const [active, setActive] = useState(0)

  return (
    <section className="relative overflow-hidden bg-black lg:h-[660px]">
      {/* Image area: stacked on top for mobile/tablet, full-bleed background on desktop */}
      <div className="relative h-[240px] w-full sm:h-[300px] md:h-[340px] lg:absolute lg:inset-0 lg:z-0 lg:h-full">
        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          onSwiper={(swiper) => { swiperRef.current = swiper }}
          onSlideChange={(swiper) => setActive(swiper.realIndex)}
          className="h-full w-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={slide.id} className="h-full">
              <img
                src={slide.image}
                alt={slide.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                className="h-full w-full object-cover object-[50%_25%] lg:object-center"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Subtle bottom blend into black content area on mobile/tablet */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-black to-transparent lg:hidden" />
      </div>

      {/* Desktop dark gradient overlay for text contrast */}
      <div className="pointer-events-none hidden lg:absolute lg:inset-0 lg:z-10 lg:block lg:bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.60)_38%,rgba(0,0,0,0.18)_65%,rgba(0,0,0,0)_100%)]" />

      {/* Content — stacked below image on mobile/tablet, vertically centered overlay on desktop */}
      <div className="relative z-20 bg-black py-9 sm:py-11 lg:flex lg:h-full lg:flex-col lg:justify-center lg:bg-transparent lg:py-0">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-[100px]">
          <div className="max-w-[540px] text-white lg:max-w-[520px]">
            <h1 className="font-display text-[34px] font-bold uppercase leading-[1.12] sm:text-[46px] md:text-[54px] lg:text-[62px] lg:leading-[1.1]">
              Need A Mental Health Provider?
            </h1>
            <p className="mt-3 font-display text-[18px] leading-[1.5] sm:mt-4 md:text-[20px]">
              No Look Further
            </p>
            <p className="mt-2.5 max-w-[430px] font-display text-[17px] leading-[1.6] text-white/90 sm:mt-3 sm:text-[18px] md:text-[20px]">
              Our goal is to provide a safe, comfortable, and warm environment so
              that you can openly discuss your mental health needs.
            </p>

            {/* Button — pagination will align to this same left edge */}
            <Button
              href="#treatment"
              className="mt-7 h-[50px] min-w-[170px] px-7 font-display text-[16px] sm:mt-8 sm:h-[54px] lg:mt-10"
              showArrow={false}
            >
              Learn More &nbsp;→
            </Button>

            {/* Pagination dots — same left edge as button (no extra offset) */}
            <div className="!mt-8 flex items-center gap-2  sm:mt-7 lg:mt-8">
              {heroSlides.map((slide, index) => (
                <HexDot
                  key={slide.id}
                  active={active === index}
                  onClick={() => swiperRef.current?.slideToLoop(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
