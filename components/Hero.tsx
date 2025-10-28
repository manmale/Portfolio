'use client'

import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/video/background.mp4" type="video/mp4" />
          {/* Fallback gradient if video not found */}
        </video>
        {/* Gradient Overlay and Fallback */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-black to-gold-900/30"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
          >
            Crafting Digital
            <br />
            <span className="gradient-text">Excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Full-Stack Developer & Tech Innovator
            <br />
            Building cutting-edge solutions that transform ideas into reality
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(168, 85, 247, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-gold-600 text-white font-semibold text-lg hover:shadow-2xl transition-all duration-300"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full glass-effect text-white font-semibold text-lg border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center"
          >
            <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
            <FiArrowDown className="text-2xl text-primary-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
