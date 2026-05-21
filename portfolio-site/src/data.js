// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Profiles', href: '#profiles' },
  { label: 'Contact', href: '#contact' },
]

// ─── Skills ───────────────────────────────────────────────────────────────────
export const SKILLS = {
  'Programming Languages': {
    icon: 'Code2',
    color: 'from-[#C7F9CC]/20 to-[#57CC99]/5',
    border: 'border-[#57CC99]/20',
    badge: 'bg-[#57CC99]/15 text-[#C7F9CC] border-[#57CC99]/25',
    items: ['Python', 'Java', 'C', 'C++', 'SQL'],
  },
  'Web Development': {
    icon: 'Globe',
    color: 'from-[#38A3A5]/20 to-[#38A3A5]/5',
    border: 'border-[#38A3A5]/20',
    badge: 'bg-[#38A3A5]/15 text-[#80ED99] border-[#38A3A5]/25',
    items: ['React', 'Node.js', 'Django', 'Spring Boot', 'Express', 'Vite'],
  },
  'Databases': {
    icon: 'Database',
    color: 'from-[#22577A]/30 to-[#22577A]/5',
    border: 'border-[#22577A]/30',
    badge: 'bg-[#22577A]/20 text-[#80ED99] border-[#22577A]/30',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQL'],
  },
  'Cloud & DevOps': {
    icon: 'Cloud',
    color: 'from-[#57CC99]/15 to-[#38A3A5]/5',
    border: 'border-[#57CC99]/15',
    badge: 'bg-[#57CC99]/10 text-[#C7F9CC] border-[#57CC99]/20',
    items: ['AWS', 'Docker', 'Git', 'GitHub', 'Vercel', 'Linux'],
  },
  'AI & Data Science': {
    icon: 'Brain',
    color: 'from-[#80ED99]/15 to-[#57CC99]/5',
    border: 'border-[#80ED99]/20',
    badge: 'bg-[#80ED99]/10 text-[#C7F9CC] border-[#80ED99]/20',
    items: ['Scikit-learn', 'Pandas', 'NumPy', 'NLP', 'Machine Learning', 'Deep Learning', 'LLMs'],
  },
  'Tools & Platforms': {
    icon: 'Wrench',
    color: 'from-[#38A3A5]/15 to-[#22577A]/5',
    border: 'border-[#38A3A5]/15',
    badge: 'bg-[#38A3A5]/10 text-[#80ED99] border-[#38A3A5]/20',
    items: ['Matplotlib', 'Jupyter', 'VS Code', 'Postman', 'Figma'],
  },
}

// ─── Experience ───────────────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    id: 1,
    role: 'Data Analytics & AI Intern',
    company: 'NIELIT, Calicut',
    duration: 'Dec 1, 2025 – Dec 26, 2025',
    type: 'Internship',
    description: 'Developed "Sentiment Analysis in Indian Education Policies" — an end-to-end NLP pipeline analysing public discourse on NEP 2020.',
    highlights: [
      'Built data preprocessing & NLP pipelines with Python, Pandas, NumPy',
      'Trained and evaluated ML models for sentiment classification',
      'Developed Django-based dashboards for presenting analytical insights',
    ],
    skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'NLP', 'Django', 'Data Visualization', 'Machine Learning'],
  },
  {
    id: 2,
    role: 'Research Intern – Text-to-Speech for Indian Languages',
    company: 'NIT Calicut',
    duration: 'May 14, 2026 – Jul 15, 2026',
    type: 'Research',
    description: 'Conducting research on TTS systems for Indian languages, studying Deep Voice 3, Tacotron, vocoders, and Indic speech corpora.',
    highlights: [
      'Studied and implemented Tacotron & Deep Voice 3 architectures',
      'Worked with Indic speech corpora and vocoder pipelines',
      'Contributed to model fine-tuning for low-resource Indian languages',
    ],
    skills: ['Python', 'PyTorch', 'Deep Learning', 'Speech Processing', 'NLP', 'TTS', 'Research Methodology'],
  },
  {
    id: 3,
    role: 'Online Summer School Participant',
    company: 'IIT Jammu',
    duration: 'Jun 2026 – Jul 2026',
    type: 'Academic',
    description: 'Intensive summer school on cutting-edge AI — covering LLMs, Generative AI, AI Agents, and intelligent automation.',
    highlights: [
      'Explored LLM architectures and fine-tuning techniques',
      'Built AI automation workflows and agentic systems',
      'Learned advanced prompt engineering and RAG strategies',
    ],
    skills: ['LLMs', 'Generative AI', 'AI Agents', 'Prompt Engineering', 'AI Automation'],
  },
]

// ─── Projects ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    title: 'LifeLink – Blood Donor Network',
    short: 'Real-time platform connecting blood donors with recipients.',
    description: 'LifeLink is a community-driven blood donor network bridging donors and recipients with real-time search, location-based matching, and a dashboard for managing donation history and requests.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    github: 'https://github.com/Priyadarshini-A-S/journey-scribe-archive',
    live: null,
  },
  {
    id: 2,
    title: 'TypeBiometric – AI Typing Pattern Detection',
    short: 'Behavioural biometric authentication via keystroke dynamics.',
    description: 'Leverages ML to authenticate users based on unique typing rhythm and keystroke patterns — capturing timing features and training a classifier to distinguish genuine users from impostors.',
    tech: ['Python', 'Scikit-learn', 'NumPy', 'Pandas', 'Flask'],
    github: 'https://github.com/Priyadarshini-A-S/AIML_Project',
    live: null,
  },
  {
    id: 3,
    title: 'Sentiment Analysis on Indian Education Policies',
    short: 'NLP analysis of public sentiment on NEP 2020 and education reforms.',
    description: 'Applies NLP to analyse public sentiment around Indian education policies. Scrapes social media and news data, preprocesses text, and visualises sentiment trends via interactive dashboards.',
    tech: ['Python', 'NLP', 'NLTK', 'Matplotlib', 'Django'],
    github: 'https://github.com/NarensGit/sentiment-analysis',
    live: null,
  },
  {
    id: 4,
    title: 'SECE College Network',
    short: 'Platform connecting students, alumni, and faculty for collaboration.',
    description: 'An application designed to connect students, alumni, and faculty members to collaborate, share opportunities, and build meaningful academic and professional networks.',
    tech: ['Spring Boot', 'PostgreSQL', 'React', 'Vite'],
    github: null,
    live: 'https://college-network.vercel.app/login',
  },
]

// ─── Certifications ───────────────────────────────────────────────────────────
export const CERTIFICATIONS = [
  { id: 1, title: 'Cloud Foundation Certificate', org: 'AWS Academy', file: 'Cloud_Foundation_certificate.jpg', logo: 'AWS_Logo.png' },
  { id: 2, title: 'AWS Certified Cloud Practitioner', org: 'Amazon Web Services', file: 'Cloud_Practitioner_certificate.jpg', logo: 'AWS_Logo.png' },
  { id: 3, title: 'Design Thinking – A Primer (Elite + Silver)', org: 'NPTEL', file: 'Nptel_design_certificate.jpg', logo: 'NPTEL_logo.png' },
  { id: 4, title: 'Mastering DSA using C and C++', org: 'Udemy', file: 'DSA_Udemy_certificate.jpg', logo: 'Udemy_logo.png' },
  { id: 5, title: 'The Complete Java Programmer', org: 'Udemy', file: 'Java_Udemy_certificate.jpg', logo: 'Udemy_logo.png' },
  { id: 6, title: 'C Training', org: 'Spoken Tutorial, IIT Bombay', file: 'C_Spoken_certificate.jpg', logo: 'IITBombay_Logo.png' },
  { id: 7, title: 'C++ Training', org: 'Spoken Tutorial, IIT Bombay', file: 'Cpp_Spoken_Certificate.jpg', logo: 'IITBombay_Logo.png' },
  { id: 8, title: 'SQL Basic', org: 'HackerRank', file: 'SQLBasic_certificate.jpg', logo: 'hackerrank_logo.png' },
  { id: 9, title: 'Bootcamp on Artificial Intelligence', org: 'FutureSkills Prime & NIELIT Calicut', file: 'Futureskills_Prime_Certificate.jpg', logo: 'FUTURESKILLS_LOGO.png' },
  { id: 10, title: 'Introduction to Java', org: 'Sololearn', file: 'JavaIntermediate_Sololearn_certificate.jpg', logo: 'SoloLearn_logo.png' },
]

// ─── Achievements ─────────────────────────────────────────────────────────────
export const ACHIEVEMENTS = [
  {
    id: 1,
    type: 'language',
    title: 'C1 Level Proficiency',
    subtitle: 'Linguaskill Business – Cambridge University',
    scores: { Listening: 'C1', Reading: 'C2', Speaking: 'B2', Writing: 'C1' },
    file: 'Linguaskill_Certificate.jpg',
    logo: 'Cambridge_Logo.png',
  },
  {
    id: 2,
    type: 'language',
    title: 'A1 Level Proficiency in German',
    subtitle: 'Goethe Institut – Overall: 81%',
    scores: { Listening: '19.92/25', Reading: '19.92/25', Speaking: '19.92/25', Writing: '21.58/25' },
    file: 'A1_Goethe_certificate.jpg',
    logo: 'Goethe_Logo.png',
  },
  {
    id: 3,
    type: 'award',
    title: 'Runner-Up – Freshathon 2025',
    subtitle: 'Sri Eshwar College of Engineering',
    detail: 'Project: LifeLink – A Blood Donor Network',
    projectId: 1,
  },
  {
    id: 4,
    type: 'award',
    title: 'Third Place – Renaissance 2024',
    subtitle: 'National Symposium, Hindusthan College of Engineering',
    detail: 'Cash Prize: ₹700',
  },
]

// ─── Profiles ─────────────────────────────────────────────────────────────────
export const PROFILES = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/priyadarshini-a-s-a32a70333/', icon: 'Linkedin', color: '#0a66c2' },
  { label: 'GitHub', url: 'https://github.com/Priyadarshini-A-S', icon: 'Github', color: '#e2e8f0' },
  { label: 'LeetCode', url: 'https://leetcode.com/u/PriyadarshiniAS/', icon: 'Code2', color: '#ffa116' },
  { label: 'HackerRank', url: 'https://www.hackerrank.com/profile/priyadarshini_63', icon: 'Terminal', color: '#00ea64' },
  { label: 'SkillRack', url: 'https://www.skillrack.com/faces/resume.xhtml?id=515031&key=b2614616e3804eb67ed474c6a812fd5930a35e6b', icon: 'Zap', color: '#57CC99' },
]
