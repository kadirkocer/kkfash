import React, { useState } from 'react'
import { motion } from 'framer-motion'

const FashCard = ({ item, isHovered }) => {
  const [logoSrc, setLogoSrc] = useState('clearbit')
  const [imageError, setImageError] = useState(false)

  const domain = item.url.replace('www.', '').split('/')[0]
  const clearbitUrl = `https://logo.clearbit.com/${domain}?size=128`
  const googleFaviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`

  const handleImageError = () => {
    if (logoSrc === 'clearbit') {
      setLogoSrc('google')
    } else {
      setImageError(true)
    }
  }

  const currentSrc = logoSrc === 'clearbit' ? clearbitUrl : googleFaviconUrl

  return (
    <motion.div
      className="group cursor-pointer flex flex-col items-center gap-2"
      onClick={() => window.open(`https://${item.url}`, '_blank', 'noopener,noreferrer')}
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    >
      {/* Logo */}
      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center overflow-hidden">
        {!imageError ? (
          <img
            src={currentSrc}
            alt={item.name}
            className="w-full h-full object-contain"
            onError={handleImageError}
            loading="lazy"
          />
        ) : (
          <span className="text-sm font-medium text-white/20">
            {item.name.charAt(0)}
          </span>
        )}
      </div>

      {/* Name */}
      <span className="text-[10px] sm:text-[11px] text-white/40 text-center leading-tight line-clamp-2 group-hover:text-white/70 transition-colors">
        {item.name}
      </span>
    </motion.div>
  )
}

export default FashCard
