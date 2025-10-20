'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FiCode, 
  FiDatabase, 
  FiLayout, 
  FiServer, 
  FiSmartphone, 
  FiCloud,
  FiGitBranch,
  FiCpu
} from 'react-icons/fi'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skillCategories = [
    {
      icon: FiCode,
      title: 'Frontend Development',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      color: 'from-primary-600 to-purple-600'
    },
    {
      icon: FiServer,
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'REST APIs', 'GraphQL', 'Microservices'],
      color: 'from-gold-600 to-orange-600'
    },
    {
      icon: FiDatabase,
      title: 'Database & Storage',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Supabase'],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: FiCloud,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel'],
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: FiSmartphone,
      title: 'Mobile Development',
      skills: ['React Native', 'Progressive Web Apps', 'Responsive Design'],
      color: 'from-pink-600 to-rose-600'
    },
    {
      icon: FiCpu,
      title: 'AI & Automation',
      skills: ['Machine Learning', 'AI Integration', 'Automation', 'Data Science'],
      color: 'from-indigo-600 to-violet-600'
    },
  ]

  return (
    <section id="skills" className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mastering the latest technologies to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect rounded-2xl p-8 hover:border-white/20 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="text-3xl text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:gradient-text transition-all duration-300">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm bg-white/5 text-gray-300 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
