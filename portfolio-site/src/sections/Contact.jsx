import { motion } from 'framer-motion'
import { SectionWrapper, SectionTitle, fadeUp } from '../components/motion'
import { Phone, Mail } from 'lucide-react'
import { FiLinkedin, FiGithub } from 'react-icons/fi'

const contacts = [
  { href: 'tel:+917708366315', Icon: Phone, label: 'Phone', value: '+91 77083 66315' },
  { href: 'mailto:priyadarshini.as2024cse@sece.ac.in', Icon: Mail, label: 'College Email', value: 'priyadarshini.as2024cse@sece.ac.in' },
  { href: 'mailto:priyad.2k6@gmail.com', Icon: Mail, label: 'Personal Email', value: 'priyad.2k6@gmail.com' },
]

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="max-w-2xl mx-auto text-center">
        <motion.p variants={fadeUp} className="text-[#80ED99]/60 mb-10 leading-relaxed">
          I'm open to internships, research collaborations, and exciting projects. Feel free to reach out!
        </motion.p>
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {contacts.map(({ href, Icon, label, value }, i) => (
            <motion.a
              key={href}
              href={href}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -4 }}
              className="glass rounded-xl p-5 flex flex-col items-center gap-3 group border border-[#57CC99]/10 hover:border-[#57CC99]/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#57CC99]/12 flex items-center justify-center group-hover:bg-[#57CC99]/20 transition-colors">
                <Icon size={17} className="text-[#57CC99]" />
              </div>
              <div className="text-center">
                <p className="text-[#80ED99]/50 text-[10px] font-semibold uppercase tracking-wide mb-1">{label}</p>
                <p className="text-white text-xs font-medium break-all leading-snug">{value}</p>
              </div>
            </motion.a>
          ))}
        </div>
        <motion.div variants={fadeUp} className="flex justify-center gap-3">
          {[
            { href: 'https://www.linkedin.com/in/priyadarshini-a-s-a32a70333/', Icon: FiLinkedin },
            { href: 'https://github.com/Priyadarshini-A-S', Icon: FiGithub },
          ].map(({ href, Icon }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer"
              className="w-11 h-11 glass rounded-xl flex items-center justify-center text-[#80ED99]/50 hover:text-[#57CC99] hover:bg-[#57CC99]/10 border border-[#57CC99]/10 hover:border-[#57CC99]/30 transition-all">
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
