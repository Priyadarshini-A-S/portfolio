import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle, fadeUp } from '../components/motion'
import { PROFILES } from '../data'
import { Code2, Terminal, Zap } from 'lucide-react'
import { FiLinkedin, FiGithub } from 'react-icons/fi'

const iconMap = { Linkedin: FiLinkedin, Github: FiGithub, Code2, Terminal, Zap }

export default function Profiles() {
  return (
    <SectionWrapper id="profiles">
      <SectionTitle>Coding Profiles</SectionTitle>
      <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
        {PROFILES.map((p, i) => {
          const Icon = iconMap[p.icon] || Code2
          return (
            <motion.a
              key={p.label}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -6, scale: 1.05 }}
              className="glass rounded-2xl px-7 py-5 flex flex-col items-center gap-3 min-w-[120px] group border border-[#57CC99]/10 hover:border-[#57CC99]/30 transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: `${p.color}18`, color: p.color }}
              >
                <Icon size={22} />
              </div>
              <span className="text-[#80ED99]/60 text-xs font-semibold group-hover:text-white transition-colors">{p.label}</span>
            </motion.a>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
