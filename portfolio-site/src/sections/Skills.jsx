import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle, fadeUp } from '../components/motion'
import { SKILLS } from '../data'
import { Code2, Globe, Database, Cloud, Brain, Wrench } from 'lucide-react'

const iconMap = { Code2, Globe, Database, Cloud, Brain, Wrench }

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionTitle>Skills & Expertise</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Object.entries(SKILLS).map(([category, data], i) => {
          const Icon = iconMap[data.icon] || Code2
          return (
            <motion.div
              key={category}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -5 }}
              className={`glass rounded-2xl p-6 bg-gradient-to-br ${data.color} border ${data.border} card-hover`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#57CC99]/15 flex items-center justify-center">
                  <Icon size={17} className="text-[#57CC99]" />
                </div>
                <h3 className="text-white font-bold text-sm">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.items.map(skill => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.07 }}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${data.badge} cursor-default`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
