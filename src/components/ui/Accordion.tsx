import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { Minus, Plus } from 'lucide-react'

type Item = { title: string; body: string }

type AccordionProps = {
  items: Item[]
  openIndex: number | null
  onToggle: (index: number) => void
  titleClassName?: string
  bodyClassName?: string
  iconColor?: string
  dividerClassName?: string
  itemPaddingClassName?: string
}

export function Accordion({
  items,
  openIndex,
  onToggle,
  titleClassName = 'font-display text-2xl font-bold text-black',
  bodyClassName = 'font-sans text-xl leading-[1.344] text-black',
  iconColor = 'text-black',
  dividerClassName = 'border-[#C18C2C]',
  itemPaddingClassName = 'py-4',
}: AccordionProps) {
  return (
    <MotionConfig reducedMotion="user">
      <div>
        {items.map((item, index) => {
          const open = openIndex === index
          return (
            <div
              key={item.title}
              className={`border-b ${dividerClassName}`}
            >
              <button
                type="button"
                className={`flex w-full items-start gap-3 text-left ${itemPaddingClassName}`}
                aria-expanded={open}
                onClick={() => onToggle(index)}
              >
                {open ? (
                  <Minus className={`mt-0.5 size-6 shrink-0 ${iconColor}`} strokeWidth={1.4} />
                ) : (
                  <Plus className={`mt-0.5 size-6 shrink-0 ${iconColor}`} strokeWidth={1.4} />
                )}
                <span className={titleClassName}>{item.title}</span>
              </button>
              <AnimatePresence initial={false}>
                {open ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className={`pb-5 pl-9 ${bodyClassName}`}>{item.body}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </MotionConfig>
  )
}
