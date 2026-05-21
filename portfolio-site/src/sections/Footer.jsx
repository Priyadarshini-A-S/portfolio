export default function Footer() {
  return (
    <footer className="border-t border-[#57CC99]/8 py-8 text-center">
      <p className="text-[#80ED99]/30 text-sm">
        Designed &amp; built by{' '}
        <span className="text-[#57CC99] font-semibold">Priyadarshini A S</span>
        {' '}· {new Date().getFullYear()}
      </p>
    </footer>
  )
}
