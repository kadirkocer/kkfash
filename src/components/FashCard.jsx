import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const FashCard = ({ item, isHovered }) => {
  const [imageError, setImageError] = useState(false)

  // Extract domain for Clearbit logo
  const domain = item.url.replace('www.', '').split('/')[0]
  const clearbitUrl = `https://logo.clearbit.com/${domain}`

  const handleCardClick = () => {
    window.open(`https://${item.url}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <motion.div
      className="group cursor-pointer"
      onClick={handleCardClick}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative glass rounded-lg overflow-hidden p-2 sm:p-3 md:p-4 flex flex-col items-center justify-center min-h-[100px] sm:min-h-[120px] md:min-h-[140px] lg:min-h-[160px] transition-all duration-300 group-hover:bg-white/20">
        {/* Animated border on hover */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <motion.div
            className="absolute inset-0 rounded-xl border border-white/40"
            animate={isHovered ? {
              boxShadow: [
                "0 0 20px rgba(255,255,255,0.1)",
                "0 0 40px rgba(255,255,255,0.2)",
                "0 0 20px rgba(255,255,255,0.1)",
              ]
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center gap-2 sm:gap-2.5 md:gap-3 w-full h-full">
          {/* Logo */}
          <motion.div
            className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-12 lg:h-12 p-1 sm:p-1.5 md:p-2 bg-white/5 rounded-md sm:rounded-md md:rounded-lg flex items-center justify-center relative"
            animate={isHovered ? { scale: 1.08 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {!imageError ? (
              <img
                src={clearbitUrl}
                alt={item.name}
                className="w-full h-full object-contain"
                onError={() => setImageError(true)}
                crossOrigin="anonymous"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 rounded flex items-center justify-center">
                <span className="text-xs sm:text-sm font-bold text-white/50">
                  {item.name.charAt(0)}
                </span>
              </div>
            )}
          </motion.div>

          {/* Brand name */}
          <motion.div
            animate={isHovered ? { y: -1 } : { y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-white font-semibold text-xs sm:text-sm md:text-base lg:text-lg line-clamp-2">
              {item.name}
            </h3>
          </motion.div>

          {/* External link icon */}
          <motion.div
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={isHovered ? { scale: 1, y: 0 } : { scale: 0.8, y: 3 }}
            transition={{ duration: 0.3 }}
          >
            <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-gray-400" strokeWidth={2} />
          </motion.div>
        </div>

        {/* Parallax effect background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={isHovered ? {
            backgroundPosition: ["0% 0%", "100% 100%"],
          } : {}}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>
    </motion.div>
  )
}

export default FashCard
