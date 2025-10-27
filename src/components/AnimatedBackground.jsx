import React from 'react'
import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-600/20 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-600/10 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=%2750%27 height=%2750%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Crect width=%2750%27 height=%2750%27 fill=%27none%27 stroke=%27rgba(255,255,255,0.02)%27 stroke-width=%271%27/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat'
        }}
      />
    </div>
  )
}

export default AnimatedBackground
