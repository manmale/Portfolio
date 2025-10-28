'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi'

const Footer = () => {
  const socialLinks = [
    { icon: FiGithub, href: '#', label: 'GitHub' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiMail, href: '#', label: 'Email' },
  ]

  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold gradient-text mb-4">
              Portfolio
            </h3>
            <p className="text-gray-400">
              Crafting digital excellence through innovative solutions and cutting-edge technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Expertise'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <p className="text-gray-400 mb-4">
              Ready to bring your ideas to life? Let's create something amazing together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-primary-600 to-gold-600 text-white font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-gray-400 hover:text-white hover:border-primary-500/50 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="text-xl" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm flex items-center gap-2">
            Made with <FiHeart className="text-red-500" /> by Premium Portfolio
            <span className="mx-2">•</span>
            {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
