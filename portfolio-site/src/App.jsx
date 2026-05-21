import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Loader } from './components/Loader'
import Landing from './pages/Landing'
import Portfolio from './pages/Portfolio'

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.35 } },
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [showPortfolio, setShowPortfolio] = useState(false)

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <AnimatePresence mode="wait">
          {!showPortfolio ? (
            <motion.div key="landing" variants={pageVariants} initial="initial" animate="enter" exit="exit">
              <Landing onExplore={() => { setShowPortfolio(true); setTimeout(() => window.scrollTo({ top: 0 }), 50) }} />
            </motion.div>
          ) : (
            <motion.div key="portfolio" variants={pageVariants} initial="initial" animate="enter" exit="exit">
              <Portfolio />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  )
}
