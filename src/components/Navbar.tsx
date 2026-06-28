import { useState } from "react"
import { useTranslation } from "react-i18next"
import { FiMenu, FiX } from 'react-icons/fi'


export const Navbar = () => {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '#about', label: t('nav.about') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') },
  ]

  const changeLanguage = (lang: 'en' | 'th') => {
    i18n.changeLanguage(lang)
  }

  return <nav className="fixed top-0 left-0 right-0 z-50 h-14 px-18 flex items-center justify-between border-b border-border bg-bg-page">
    <span className="text-accent font-semibold text-base font-sans">
      gazentia.dev
    </span>
    <div className="flex items-center gap-6">

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Language toggle */}
      <div className="flex items-center border border-border rounded-md overflow-hidden text-xs">
        <button
          onClick={() => changeLanguage('en')}
          className={`px-2 py-1 transition-colors ${i18n.language === 'en' ? 'bg-accent text-bg-page' : 'bg-transparent text-text-muted'}`}>EN</button>
        <button
          onClick={() => changeLanguage('th')}
          className={`px-2 py-1 transition-colors ${i18n.language === 'th' ? 'bg-accent text-bg-page' : 'bg-transparent text-text-muted'}`}>TH</button>
      </div>

      {/* Hamburger — mobile only */}
      <button
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        className="md:hidden flex items-center justify-center w-8 h-8 text-text-secondary hover:text-text-primary transition-colors"
      >
        {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>
    </div>
    {/* Mobile dropdown */}
    {menuOpen && (
      <ul className="md:hidden absolute top-14 left-0 right-0 flex flex-col list-none m-0 p-0 border-b border-border bg-bg-page">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 text-sm text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-colors border-t border-border"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    )}
  </nav>
}