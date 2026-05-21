import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionWrapper, SectionTitle, fadeUp } from '../components/motion'
import { PROJECTS } from '../data'
import { ExternalLink, X } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={e => e.stopPropagation()}
          className="glass-dark rounded-2xl p-7 max-w-lg w-full relative border border-[#57CC99]/20"
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-[#80ED99]/50 hover:text-white transition-colors">
            <X size={18} />
          </button>
          <h3 className="text-white font-bold text-xl mb-3 pr-6">{project.title}</h3>
          <p className="text-[#C7F9CC]/70 text-sm leading-relaxed mb-5">{project.description}</p>
          <p className="text-[#57CC99] text-xs font-semibold uppercase tracking-wide mb-2">Tech Stack</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map(t => (
              <span key={t} className="px-3 py-1 text-xs font-semibold rounded-full bg-[#57CC99]/12 text-[#C7F9CC] border border-[#57CC99]/20">{t}</span>
            ))}
          </div>
          <div className="flex gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs py-2 px-4">
                <FiGithub size={14} /> GitHub
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs py-2 px-4">
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)
  return (
    <SectionWrapper id="projects">
      <SectionTitle>Featured Projects</SectionTitle>
      <div className="grid md:grid-cols-2 gap-5">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.id}
            variants={fadeUp}
            custom={i}
            whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(56,163,165,0.18)' }}
            onClick={() => setSelected(p)}
            className="glass rounded-2xl p-6 flex flex-col gap-4 cursor-pointer group border border-[#57CC99]/10 hover:border-[#57CC99]/30 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#57CC99] to-[#38A3A5] flex items-center justify-center text-[#0d1f2d] font-black text-sm shrink-0">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {p.github && <FiGithub size={15} className="text-[#57CC99]" />}
                {p.live && <ExternalLink size={15} className="text-[#38A3A5]" />}
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-base mb-1.5 group-hover:text-[#80ED99] transition-colors">{p.title}</h3>
              <p className="text-[#80ED99]/50 text-sm leading-relaxed">{p.short}</p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {p.tech.map(t => (
                <span key={t} className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-[#57CC99]/10 text-[#C7F9CC]/80 border border-[#57CC99]/15">{t}</span>
              ))}
            </div>
            <p className="text-[#57CC99] text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
              View Details <span>→</span>
            </p>
          </motion.div>
        ))}
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </SectionWrapper>
  )
}
