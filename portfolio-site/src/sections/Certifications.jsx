import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionWrapper, SectionTitle, fadeUp } from '../components/motion'
import { CERTIFICATIONS } from '../data'
import { X, Award } from 'lucide-react'

function CertModal({ cert, onClose }) {
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
          className="glass-dark rounded-2xl p-5 max-w-2xl w-full relative border border-[#57CC99]/20"
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-[#80ED99]/50 hover:text-white transition-colors z-10">
            <X size={18} />
          </button>
          <img
            src={`/certificates/${cert.file}`}
            alt={cert.title}
            className="w-full rounded-xl mb-4 object-contain max-h-[70vh]"
          />
          <div className="text-center">
            <p className="text-white font-bold">{cert.title}</p>
            <p className="text-[#57CC99] text-sm mt-1">{cert.org}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Certifications() {
  const [selected, setSelected] = useState(null)
  return (
    <SectionWrapper id="certifications">
      <SectionTitle>Certifications</SectionTitle>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {CERTIFICATIONS.map((cert, i) => (
          <motion.div
            key={cert.id}
            variants={fadeUp}
            custom={i}
            whileHover={{ y: -5, boxShadow: '0 12px 36px rgba(87,204,153,0.15)' }}
            onClick={() => setSelected(cert)}
            className="glass rounded-xl p-5 flex flex-col items-center gap-3 cursor-pointer group border border-[#57CC99]/10 hover:border-[#57CC99]/30 transition-all duration-300 text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-white/90 flex items-center justify-center group-hover:bg-white transition-colors overflow-hidden">
              <img
                src={`/certificates/${cert.logo}`}
                alt={cert.org}
                className="w-10 h-10 object-contain"
                onError={e => { e.target.style.display = 'none' }}
              />
            </div>
            <div>
              <p className="text-white font-semibold text-xs leading-snug mb-1">{cert.title}</p>
              <p className="text-[#57CC99]/70 text-[10px] font-medium">{cert.org}</p>
            </div>
            <p className="text-[#57CC99]/40 text-[10px] group-hover:text-[#57CC99]/70 transition-colors flex items-center gap-1">
              <Award size={10} /> Click to view
            </p>
          </motion.div>
        ))}
      </div>
      {selected && <CertModal cert={selected} onClose={() => setSelected(null)} />}
    </SectionWrapper>
  )
}
