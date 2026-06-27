export const Navbar = () => {
  return <nav className="fixed top-0 left-0 right-0 z-50 h-14 px-18 flex items-center justify-between border-b border-border bg-bg-page">
    <span className="text-accent font-semibold text-base font-sans">
      gazentia.dev
    </span>
    <ul className="flex items-center gap-6 list-none m-0 p-0">
      <li><a href="#about" className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300">About</a></li>
      <li><a href="#about" className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300">Projects</a></li>
      <li><a href="#about" className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300">Contact</a></li>
    </ul>
  </nav>
}