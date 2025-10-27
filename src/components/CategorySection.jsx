import React, { useState } from 'react'
import { motion } from 'framer-motion'
import FashCard from './FashCard'

const CategorySection = ({ category, index }) => {
  const [hoveredId, setHoveredId] = useState(null)
  const Icon = category.icon

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        staggerChildren: 0.05,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: index * 0.1 },
    },
  }

  return (
    <motion.section
      className="mb-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Category Title */}
      <motion.div
        className="flex items-center gap-4 mb-12 md:mb-16"
        variants={titleVariants}
      >
        <div className="flex items-center gap-3">
          <Icon className="w-8 h-8 text-gray-300" strokeWidth={1.5} />
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            {category.title}
          </h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent" />
      </motion.div>

      {/* Grid of cards */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4 lg:gap-4">
        {category.items.map((item, itemIndex) => (
          <motion.div
            key={item.url}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: itemIndex * 0.03,
            }}
            viewport={{ once: false, amount: 0.3 }}
            onHoverStart={() => setHoveredId(item.url)}
            onHoverEnd={() => setHoveredId(null)}
          >
            <FashCard
              item={item}
              isHovered={hoveredId === item.url}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default CategorySection
