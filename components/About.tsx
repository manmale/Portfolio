'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiAward, FiUsers, FiTrendingUp } from 'react-icons/fi'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    { icon: FiAward, value: '100+', label: 'Projects Completed' },
    { icon: FiUsers, value: '50+', label: 'Happy Clients' },
    { icon: FiTrendingUp, value: '5+', label: 'Years Experience' },
  ]

  return (
    <section id="about" className="relative py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500 to-gold-500 blur-xl opacity-50"></div>
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden glass-effect border-2 border-white/10">
                <div className="w-full h-full bg-gradient-to-br from-primary-900/50 to-gold-900/50 flex items-center justify-center">
                  {/* Placeholder for profile image */}
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary-600 to-gold-600 flex items-center justify-center text-8xl font-bold text-white">
                      P
                    </div>
                    <p className="mt-6 text-gray-400 text-sm">Replace with your profile image</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary-600/30 rounded-full blur-2xl"
              ></motion.div>
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold-600/30 rounded-full blur-2xl"
              ></motion.div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-4 text-gray-300 text-lg"
            >
              <p>
                I'm a passionate <span className="text-primary-400 font-semibold">tech creator</span> and 
                <span className="text-gold-400 font-semibold"> innovative developer</span> who transforms 
                complex ideas into elegant, functional solutions.
              </p>
              <p>
                With expertise spanning <span className="text-white font-semibold">web development</span>, 
                <span className="text-white font-semibold"> software engineering</span>, and 
                <span className="text-white font-semibold"> cutting-edge technologies</span>, I create 
                digital experiences that don't just work—they inspire.
              </p>
              <p>
                My commitment to <span className="text-primary-400 font-semibold">excellence</span> and 
                <span className="text-gold-400 font-semibold"> trustworthiness</span> ensures every project 
                I deliver exceeds expectations. I believe in building lasting relationships through 
                reliable, high-quality work.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center glass-effect rounded-xl p-4 hover:border-primary-500/50 transition-all duration-300"
                >
                  <stat.icon className="text-3xl text-primary-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
