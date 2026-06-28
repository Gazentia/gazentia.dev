import { useTranslation } from "react-i18next"

export const Navbar = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lang: 'en' | 'th') => {
    i18n.changeLanguage(lang)
  }
  return <nav className="fixed top-0 left-0 right-0 z-50 h-14 px-18 flex items-center justify-between border-b border-border bg-bg-page">
    <span className="text-accent font-semibold text-base font-sans">
      gazentia.dev
    </span>
    <div className="flex items-center gap-6">
      <ul className="flex items-center gap-6 list-none m-0 p-0">
        <li><a href="#about" className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300">{t('nav.about')}</a></li>
        <li><a href="#projects" className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300">{t('nav.projects')}</a></li>
        <li><a href="#contact" className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-300">{t('nav.contact')}</a></li>
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
    </div>
  </nav>
}