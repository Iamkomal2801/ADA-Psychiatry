import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { testimonials } from '../../data/site'
import 'swiper/css'
import 'swiper/css/pagination'

// SVG hexagon bullet — outline only; active state fills it via CSS
const hexBullet = (_index: number, className: string) =>
  `<span class="${className}">
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 1.5L19.5 6.25V15.75L11 20.5L2.5 15.75V6.25L11 1.5Z"
        stroke="#b8922b" stroke-width="1.6"
        fill="none" class="hex-fill"/>
    </svg>
  </span>`

export function Testimonials() {
  return (
    <section className="overflow-hidden bg-page py-14 sm:py-16 md:py-20">
      <h2 className="px-5 text-center font-display text-[28px] font-bold sm:px-6 sm:text-[32px] md:text-[40px]">
        What Our Patients Are saying
      </h2>

      <div className="mt-12">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            renderBullet: hexBullet,
          }}
          centeredSlides
          initialSlide={1}
          spaceBetween={20}
          slidesPerView={1.12}
          breakpoints={{
            640:  { slidesPerView: 1.3,  spaceBetween: 20 },
            900:  { slidesPerView: 1.85, spaceBetween: 24 },
            1200: { slidesPerView: 2.3,  spaceBetween: 28 },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="testimonial-slide">
              <article className="testimonial-card flex h-full flex-col overflow-hidden rounded-xl bg-cream">

                {/* Body */}
                <div className="flex flex-1 flex-col px-6 pt-7 pb-8 sm:px-10 sm:pt-10 sm:pb-10 md:px-12 md:pt-12">
                  <div
                    className="select-none font-sans font-black text-ink"
                    aria-hidden="true"
                    style={{ fontSize: 40, lineHeight: 1, marginBottom: 14 }}
                  >
                    ❝
                  </div>
                  <p className="font-sans text-[16px] leading-[1.65] text-ink sm:text-[18px] md:text-[19px] md:leading-[1.7]">
                    "{item.quote}"
                  </p>
                </div>

                {/* Gold footer */}
                <div
                  className="flex items-center justify-center gap-4 px-5 py-4 sm:px-8 sm:py-5"
                  style={{ backgroundColor: '#b8922b' }}
                >
                  <img
                    src={item.avatar}
                    alt={`Photo of ${item.name}`}
                    className="size-[56px] shrink-0 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-sans text-[15px] font-bold leading-snug text-white">
                      {item.name}
                    </p>
                    <p className="font-sans text-sm text-white/80">
                      {item.role}
                    </p>
                  </div>
                </div>

              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .testimonials-swiper {
          padding-bottom: 64px !important;
        }
        .testimonials-swiper .swiper-wrapper {
          align-items: stretch;
        }
        .testimonial-slide {
          height: auto !important;
        }
        .testimonial-card {
          min-height: 330px;
        }
        @media (min-width: 768px) {
          .testimonial-card {
            min-height: 420px;
          }
        }

        /* Hexagon pagination */
        .testimonials-swiper .swiper-pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          bottom: 14px;
        }
        .testimonials-swiper .swiper-pagination-bullet {
          width: 22px;
          height: 22px;
          background: transparent !important;
          border-radius: 0 !important;
          opacity: 1 !important;
          margin: 0 !important;
          padding: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        /* inactive — outline only, no fill */
        .testimonials-swiper .swiper-pagination-bullet .hex-fill {
          fill: none;
        }
        /* active — fill the hexagon gold */
        .testimonials-swiper .swiper-pagination-bullet-active .hex-fill {
          fill: #b8922b;
        }
      `}</style>
    </section>
  )
}
