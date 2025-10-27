import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import FashCard from './FashCard'

const CategorySection = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section className="w-full" style={{paddingTop: '40px', paddingBottom: '40px'}}>
      {/* Category Title - Clickable Dropdown */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-center group transition-all duration-300"
        style={{marginBottom: '20px'}}
      >
        <div className="inline-flex items-center justify-center gap-3">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:text-gray-300 transition-colors">
            {category.title}
          </h2>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown
              className="w-6 h-6 text-gray-300"
              strokeWidth={1.5}
            />
          </motion.div>
        </div>
      </button>

      {/* Expandable Grid with Animation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="flex justify-center">
          <div className="grid grid-cols-6 gap-8 sm:gap-10 md:gap-10 lg:gap-10 w-full" style={{maxWidth: '900px'}}>
          {category.items.map((item, itemIndex) => (
            <motion.div
              key={item.url}
              initial={{ opacity: 0, y: 20 }}
              animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
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
        </div>
      </motion.div>
    </section>
  )
}

export default CategorySection
