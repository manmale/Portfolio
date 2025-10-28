'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 100], [0, 1])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Expertise', href: '#expertise' },
  ]

  return (
    <motion.nav
      style={{ opacity }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-display font-bold gradient-text"
        >
          Portfolio
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex space-x-8"
        >
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-gold-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-6 py-2 rounded-full bg-gradient-to-r from-primary-600 to-gold-600 text-white font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
        >
          Contact
        </motion.button>
      </div>
    </motion.nav>
  )
}

export default Navigation
