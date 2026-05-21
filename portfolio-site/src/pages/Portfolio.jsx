import Navbar from '../components/Navbar'
import { ScrollProgress, BackToTop } from '../components/Loader'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Experience from '../sections/Experience'
import Projects from '../sections/Projects'
import Certifications from '../sections/Certifications'
import Achievements from '../sections/Achievements'
import Profiles from '../sections/Profiles'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

export default function Portfolio() {
  return (
    <div className="bg-[#0d1f2d] min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Achievements />
        <Profiles />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
