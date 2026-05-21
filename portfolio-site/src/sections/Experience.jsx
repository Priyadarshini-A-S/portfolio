import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle, fadeUp } from '../components/motion'
import { EXPERIENCE } from '../data'
import { Briefcase, FlaskConical, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react'

const typeIcon = { Internship: Briefcase, Research: FlaskConical, Academic: GraduationCap }
const typeColor = {
  Internship: 'bg-[#57CC99]/15 text-[#57CC99] border-[#57CC99]/25',
  Research: 'bg-[#38A3A5]/15 text-[#38A3A5] border-[#38A3A5]/25',
  Academic: 'bg-[#22577A]/30 text-[#80ED99] border-[#22577A]/40',
}

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionTitle>Experience</SectionTitle>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#57CC99]/50 via-[#38A3A5]/30 to-transparent" />
        {EXPERIENCE.map((exp, i) => {
          const Icon = typeIcon[exp.type] || Briefcase
          return (
            <motion.div key={exp.id} variants={fadeUp} custom={i} className="relative pl-16 mb-10 last:mb-0">
              <div className="absolute left-4 top-5 w-4 h-4 rounded-full bg-gradient-to-br from-[#57CC99] to-[#38A3A5] ring-4 ring-[#0d1f2d] shadow-lg shadow-[#57CC99]/20" />
              <motion.div whileHover={{ y: -3 }} className="glass rounded-2xl p-6 card-hover">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#57CC99]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={18} className="text-[#57CC99]" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base leading-snug">{exp.role}</h3>
                      <p className="text-[#57CC99] font-semibold text-sm mt-0.5">{exp.company}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${typeColor[exp.type]}`}>
                    {exp.type}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[#80ED99]/50 text-xs mb-4 ml-13">
                  <Calendar size={11} /> {exp.duration}
                </div>
                <p className="text-[#C7F9CC]/70 text-sm leading-relaxed mb-4">{exp.description}</p>
                <ul className="space-y-1.5 mb-4">
                  {exp.highlights.map(h => (
                    <li key={h} className="flex items-start gap-2 text-[#80ED99]/60 text-xs">
                      <CheckCircle2 size={13} className="text-[#57CC99] shrink-0 mt-0.5" /> {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#57CC99]/10">
                  {exp.skills.map(s => (
                    <span key={s} className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-[#38A3A5]/15 text-[#80ED99] border border-[#38A3A5]/20">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
