import React from 'react'
import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#0a0a0f] overflow-hidden">
      {/* Large ambient blobs */}
      <motion.div
        className="absolute -top-48 -left-48 w-[500px] h-[500px] bg-purple-600/[0.07] rounded-full blur-[120px]"
        animate={{
          x: [0, 80, 0],
          y: [0, 60, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="absolute -bottom-48 -right-48 w-[500px] h-[500px] bg-blue-600/[0.07] rounded-full blur-[120px]"
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-indigo-500/[0.04] rounded-full blur-[100px]"
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      />

      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '128px 128px'
      }} />
    </div>
  )
}

export default AnimatedBackground
