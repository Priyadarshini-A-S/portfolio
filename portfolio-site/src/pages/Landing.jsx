import { motion } from 'framer-motion'
import { Download, ArrowRight, Sparkles } from 'lucide-react'

const TECH_TAGS = ['Python', 'React', 'AI/ML', 'NLP', 'Node.js', 'PyTorch', 'LLMs', 'Django', 'AWS']

const floatVariants = {
  animate: (i) => ({
    y: [0, -12, 0],
    opacity: [0.4, 0.8, 0.4],
    transition: { duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 },
  }),
}

export default function Landing({ onExplore }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d1f2d] dot-grid">
      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-[#57CC99]/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-[#38A3A5]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#22577A]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating tech tags */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {TECH_TAGS.map((tag, i) => (
          <motion.div
            key={tag}
            custom={i}
            variants={floatVariants}
            animate="animate"
            className="absolute glass-dark rounded-full px-3 py-1 text-[10px] font-semibold text-[#57CC99]/60 border border-[#57CC99]/10"
            style={{
              left: `${8 + (i * 11) % 84}%`,
              top: `${10 + (i * 17) % 75}%`,
            }}
          >
            {tag}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text side */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="text-left"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="inline-flex items-center gap-2 glass-dark rounded-full px-4 py-1.5 mb-6 border border-[#57CC99]/20"
          >
            <Sparkles size={13} className="text-[#57CC99]" />
            <span className="text-[#80ED99] text-xs font-semibold tracking-wide">AI Enthusiast • Software Developer • Research Intern</span>
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-5"
          >
            <span className="text-white">Transforming Ideas into</span>{' '}
            <span className="gradient-text">Intelligent Digital Solutions</span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-[#80ED99]/60 text-base leading-relaxed mb-8 max-w-lg"
          >
            Building scalable applications, exploring Generative AI, and shaping solutions that create meaningful impact.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-wrap gap-3"
          >
            <button onClick={onExplore} className="btn-primary text-sm">
              Explore Portfolio <ArrowRight size={16} />
            </button>
            <a href="/resume.pdf" download className="btn-outline text-sm">
              <Download size={15} /> Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Photo side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#57CC99]/30 via-[#38A3A5]/20 to-[#22577A]/30 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-[#57CC99]/20 shadow-2xl">
              <img
                src="/photo1.jpg"
                alt="Priyadarshini A S"
                className="w-72 h-80 md:w-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f2d]/40 to-transparent" />
            </div>
            {/* Name card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 glass-dark rounded-2xl px-5 py-3 text-center border border-[#57CC99]/20 whitespace-nowrap"
            >
              <p className="text-white font-bold text-sm">Priyadarshini A S</p>
              <p className="text-[#57CC99] text-xs mt-0.5">CSE @ Sri Eshwar College</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-[#57CC99]/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-[#57CC99]/60" />
        </motion.div>
        <span className="text-[#57CC99]/30 text-[10px] tracking-widest uppercase">Scroll</span>
      </motion.div>
    </div>
  )
}
