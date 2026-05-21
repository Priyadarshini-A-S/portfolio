import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionWrapper, SectionTitle, fadeUp } from '../components/motion'
import { ACHIEVEMENTS, PROJECTS } from '../data'
import { Trophy, Languages, X } from 'lucide-react'

function AchievModal({ item, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          onClick={e => e.stopPropagation()}
          className="glass-dark rounded-2xl p-6 max-w-lg w-full relative border border-[#57CC99]/20"
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-[#80ED99]/50 hover:text-white transition-colors">
            <X size={18} />
          </button>
          {item.file && (
            <img
              src={`/certificates/${item.file}`}
              alt={item.title}
              className="w-full rounded-xl mb-5 object-contain max-h-64"
            />
          )}
          <div className="flex items-center gap-3 mb-3">
            {item.logo && (
              <img src={`/certificates/${item.logo}`} alt="" className="w-10 h-10 object-contain" onError={e => { e.target.style.display = 'none' }} />
            )}
            <div>
              <p className="text-white font-bold">{item.title}</p>
              <p className="text-[#57CC99] text-sm">{item.subtitle}</p>
            </div>
          </div>
          {item.scores && (
            <div className="grid grid-cols-2 gap-2 mt-4">
              {Object.entries(item.scores).map(([k, v]) => (
                <div key={k} className="glass rounded-lg p-3 text-center">
                  <p className="text-[#57CC99] font-bold text-sm">{v}</p>
                  <p className="text-[#80ED99]/50 text-xs mt-0.5">{k}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Achievements() {
  const [selected, setSelected] = useState(null)

  return (
    <SectionWrapper id="achievements">
      <SectionTitle>Achievements</SectionTitle>
      <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {ACHIEVEMENTS.map((item, i) => {
          const isLang = item.type === 'language'
          const linkedProject = item.projectId ? PROJECTS.find(p => p.id === item.projectId) : null
          return (
            <motion.div
              key={item.id}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -4 }}
              onClick={() => (isLang || item.file) && setSelected(item)}
              className={`glass rounded-2xl p-6 border border-[#57CC99]/10 hover:border-[#57CC99]/25 transition-all duration-300 ${isLang || item.file ? 'cursor-pointer' : ''}`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${isLang ? 'bg-[#38A3A5]/15' : 'bg-[#57CC99]/15'}`}>
                  {item.logo
                    ? <img src={`/certificates/${item.logo}`} alt="" className="w-7 h-7 object-contain" onError={e => { e.target.style.display = 'none' }} />
                    : isLang ? <Languages size={18} className="text-[#38A3A5]" /> : <Trophy size={18} className="text-[#57CC99]" />
                  }
                </div>
                <div className="flex-1">
                  <p className="text-white font-bold text-sm leading-snug">{item.title}</p>
                  <p className="text-[#57CC99]/70 text-xs mt-1">{item.subtitle}</p>
                  {item.detail && !linkedProject && (
                    <p className="text-[#80ED99]/50 text-xs mt-1">{item.detail}</p>
                  )}
                  {linkedProject && (
                    <p className="text-xs mt-1.5 text-[#80ED99]/60">
                      Project:{' '}
                      <button
                        onClick={e => { e.stopPropagation(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                        className="text-[#57CC99] hover:underline font-medium"
                      >
                        {linkedProject.title}
                      </button>
                    </p>
                  )}
                  {item.scores && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {Object.entries(item.scores).map(([k, v]) => (
                        <span key={k} className="px-2 py-0.5 text-[10px] rounded-full bg-[#38A3A5]/15 text-[#80ED99] border border-[#38A3A5]/20">
                          {k}: {v}
                        </span>
                      ))}
                    </div>
                  )}
                  {(isLang || item.file) && (
                    <p className="text-[#57CC99]/40 text-[10px] mt-2">Click to view certificate →</p>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
      {selected && <AchievModal item={selected} onClose={() => setSelected(null)} />}
    </SectionWrapper>
  )
}
