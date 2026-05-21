import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 h-0.5 z-[60] bg-gradient-to-r from-[#C7F9CC] via-[#57CC99] to-[#38A3A5]"
    />
  )
}

export function Loader({ onDone }) {
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => { setVisible(false); onDone() }, 2000)
    return () => clearTimeout(t)
  }, [onDone])

  if (!visible) return null
  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d1f2d]"
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-black gradient-text mb-8 tracking-tight"
      >
        PAS<span className="text-[#57CC99]">.</span>
      </motion.div>
      <div className="w-52 h-0.5 bg-white/8 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
          className="h-full bg-gradient-to-r from-[#C7F9CC] via-[#57CC99] to-[#38A3A5]"
        />
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4 text-[#57CC99]/50 text-xs tracking-widest uppercase"
      >
        Loading Portfolio
      </motion.p>
    </motion.div>
  )
}

export function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  if (!show) return null
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-6 z-40 w-11 h-11 rounded-full glass-dark border border-[#57CC99]/30 flex items-center justify-center text-[#57CC99] hover:bg-[#57CC99]/15 hover:border-[#57CC99]/60 transition-all"
      title="Back to top"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </motion.button>
  )
}
