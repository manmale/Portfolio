'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCode, FiGlobe, FiPackage, FiZap, FiShield, FiHeart } from 'react-icons/fi'

const Expertise = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const expertise = [
    {
      icon: FiGlobe,
      title: 'Web Development',
      description: 'Creating stunning, responsive websites that captivate users and drive results. From landing pages to complex web applications.',
      gradient: 'from-primary-600 to-purple-600'
    },
    {
      icon: FiPackage,
      title: 'Software Engineering',
      description: 'Building robust, scalable software solutions tailored to your unique business needs with clean, maintainable code.',
      gradient: 'from-gold-600 to-orange-600'
    },
    {
      icon: FiCode,
      title: 'Custom Applications',
      description: 'Developing bespoke applications that solve real problems. Whatever you can imagine, I can build it.',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      icon: FiZap,
      title: 'Performance Optimization',
      description: 'Making your digital products lightning-fast and efficient. Every millisecond counts in user experience.',
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      icon: FiShield,
      title: 'Security & Reliability',
      description: 'Implementing industry-best practices to ensure your applications are secure, stable, and trustworthy.',
      gradient: 'from-red-600 to-rose-600'
    },
    {
      icon: FiHeart,
      title: 'Client Success',
      description: 'Your success is my priority. I provide ongoing support, clear communication, and deliver beyond expectations.',
      gradient: 'from-pink-600 to-purple-600'
    },
  ]

  return (
    <section id="expertise" className="relative py-32 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Areas of <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            I can create anything tech-related—from beautiful websites to complex software systems.
            <br />
            Trust, quality, and excellence are at the core of everything I do.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Card */}
              <div className="h-full glass-effect rounded-2xl p-8 hover:border-white/30 transition-all duration-300">
                {/* Gradient Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} rounded-t-2xl`}></div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6`}
                >
                  <item.icon className="text-3xl text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:gradient-text transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="glass-effect rounded-2xl p-12 max-w-4xl mx-auto border-2 border-primary-500/20">
            <h3 className="text-3xl font-display font-bold mb-6">
              Why <span className="gradient-text">Trust Me?</span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              With a proven track record of delivering exceptional results, I bring dedication, 
              expertise, and integrity to every project. My clients trust me because I don't just 
              build products—I build lasting partnerships based on transparency, communication, 
              and a shared vision for success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 rounded-full glass-effect text-white border border-primary-500/50">
                ✓ Reliable & Punctual
              </span>
              <span className="px-6 py-3 rounded-full glass-effect text-white border border-gold-500/50">
                ✓ Clear Communication
              </span>
              <span className="px-6 py-3 rounded-full glass-effect text-white border border-blue-500/50">
                ✓ Quality Guaranteed
              </span>
              <span className="px-6 py-3 rounded-full glass-effect text-white border border-green-500/50">
                ✓ Ongoing Support
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Expertise
