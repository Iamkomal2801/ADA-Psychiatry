import { states } from '../../data/site'

export function States() {
  return (
    <section className="bg-page py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6">

        {/* Heading */}
        <h2 className="text-center font-display text-[28px] font-bold leading-tight text-ink sm:text-[32px] md:text-[40px]">
          Now Accepting Patients In<br className="hidden sm:inline" /> The Following States
        </h2>

        {/* 3-column grid — each card up to 400px */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {states.map((state) => (
            <article
              key={state.name}
              className="mx-auto flex w-full max-w-[400px] flex-col items-center"
            >
              {/* Half-circle image — 2:1 aspect ratio = perfect semicircle at every width */}
              <div
                className="aspect-[2/1] w-full shrink-0 overflow-hidden"
                style={{
                  borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
                }}
              >
                <img
                  src={state.image}
                  alt={`${state.name} landscape`}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              {/* Text content — responsive horizontal padding prevents wrapping/overflow on mobile & tablet */}
              <div className="flex w-full flex-col items-center px-4 pt-6 pb-4 text-center sm:px-6 md:pt-[33px] md:pb-[29px]">
                {/* State name — Abhaya Libre Bold, scales to 44px on desktop */}
                <h3 className="font-display text-[32px] font-bold leading-none text-ink sm:text-[36px] xl:text-[44px]">
                  {state.name}
                </h3>

                {/* Status */}
                <p className="mt-2 font-sans text-[14px] text-ink/70">
                  {state.status}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
