import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle, fadeUp, slideLeft, slideRight } from '../components/motion'
import { Lightbulb, Code, Zap, Target } from 'lucide-react'

const highlights = [
  { icon: Lightbulb, label: 'Innovation Driven', desc: 'Turning complex problems into elegant solutions' },
  { icon: Code, label: 'Full Stack Dev', desc: 'Building scalable applications end-to-end' },
  { icon: Zap, label: 'AI Enthusiast', desc: 'Exploring Generative AI and LLMs' },
  { icon: Target, label: 'Research Focused', desc: 'Contributing to cutting-edge technology' },
]

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionTitle>About Me</SectionTitle>
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <motion.div variants={slideLeft} className="space-y-5">
          <p className="text-[#C7F9CC]/80 leading-relaxed text-base">
            Driven by curiosity and a passion for innovation, I enjoy transforming complex problems into elegant, impactful solutions. My journey spans software engineering, artificial intelligence, data analytics, and research in speech technologies for Indian languages.
          </p>
          <p className="text-[#80ED99]/60 leading-relaxed text-base">
            From building scalable full-stack applications to exploring Generative AI, large language models, and intelligent automation, I strive to create technology that is both meaningful and human-centered.
          </p>
          <p className="text-[#80ED99]/60 leading-relaxed text-base">
            I believe in continuous learning, thoughtful design, and leveraging technology to solve real-world challenges.
          </p>
          <div className="grid grid-cols-2 gap-3 pt-2">
            {highlights.map(({ icon: Icon, label, desc }) => (
              <motion.div
                key={label}
                whileHover={{ y: -3 }}
                className="glass rounded-xl p-4 flex flex-col gap-2 card-hover cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-[#57CC99]/15 flex items-center justify-center">
                  <Icon size={16} className="text-[#57CC99]" />
                </div>
                <p className="text-white font-semibold text-sm">{label}</p>
                <p className="text-[#80ED99]/50 text-xs">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={slideRight} className="flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#57CC99]/25 via-[#38A3A5]/15 to-[#22577A]/25 blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
            <div className="relative rounded-3xl overflow-hidden border border-[#57CC99]/20">
              <img
                src="/photo2.jpg"
                alt="Priyadarshini A S"
                className="w-72 h-88 md:w-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f2d]/30 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
