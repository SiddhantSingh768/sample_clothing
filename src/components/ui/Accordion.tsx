import * as React from "react"
import { cn } from "../../lib/utils"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface AccordionProps {
  items: { title: string; content: React.ReactNode }[]
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <div className="w-full divide-y divide-brand-primary/10 border-y border-brand-primary/10">
      {items.map((item, index) => (
        <div key={index} className="py-4">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between text-left font-medium transition-all hover:underline"
          >
            {item.title}
            <ChevronDown
              className={cn(
                "h-4 w-4 shrink-0 transition-transform duration-200",
                openIndex === index && "rotate-180"
              )}
            />
          </button>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pb-2 pt-4 text-sm text-brand-primary/80">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
