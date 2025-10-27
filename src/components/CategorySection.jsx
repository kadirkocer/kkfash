import React, { useState } from 'react'
import FashCard from './FashCard'

const CategorySection = ({ category }) => {
  const [hoveredId, setHoveredId] = useState(null)
  const Icon = category.icon

  return (
    <section className="mb-40">
      {/* Category Title */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center justify-center gap-3">
          <Icon className="w-8 h-8 text-gray-300" strokeWidth={1.5} />
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            {category.title}
          </h2>
        </div>
      </div>

      {/* Grid of cards - centered */}
      <div className="flex justify-center">
        <div className="grid grid-cols-6 gap-8 sm:gap-10 md:gap-10 lg:gap-10 w-full" style={{maxWidth: '900px'}}>
        {category.items.map((item, itemIndex) => (
          <div
            key={item.url}
            onMouseEnter={() => setHoveredId(item.url)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <FashCard
              item={item}
              isHovered={hoveredId === item.url}
            />
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection
