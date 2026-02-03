import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import FashCard from './FashCard'

const CategorySection = ({ category, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const [hoveredId, setHoveredId] = useState(null)

  const Icon = category.icon

  return (
    <section className="w-full mb-8 sm:mb-10">
      {/* Category Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full group"
      >
        <div className="flex items-center justify-center gap-3 pb-3 mb-1">
          <Icon className="w-4 h-4 text-white/25" strokeWidth={1.5} />
          <h2 className="text-sm sm:text-base font-medium tracking-wide text-white/60 group-hover:text-white/90 transition-colors uppercase">
            {category.title}
          </h2>
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-white/20 group-hover:text-white/50 transition-colors"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </motion.div>
        </div>
      </button>

      {/* Cards Grid */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 py-5">
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={item.url}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: itemIndex * 0.025,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  onMouseEnter={() => setHoveredId(item.url)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <FashCard
                    item={item}
                    isHovered={hoveredId === item.url}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default CategorySection
