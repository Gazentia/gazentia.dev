import { useTranslation } from 'react-i18next'

export const Contact = () => {
  const { t } = useTranslation()

  return <section id="contact" className="max-w-2xl mx-auto px-6 py-14 md:py-20 flex flex-col items-center text-center gap-6">
    <p className="text-xs font-medium tracking-[2px] text-accent">{t('contact.label')}</p>

    <h2 className="text-3xl font-semibold text-text-primary">{t('contact.heading')}</h2>
    <a href="mailto:#" className="px-7 py-3 rounded-lg bg-accent text-bg-page text-base font-semibold hover:bg-accent-light hover:scale-103 active:scale-97 transition-all duration-150">{t('contact.cta')}</a>

    <div className="flex gap-6 mt-2">
      <a href="#" className="text-sm text-text-muted hover:text-text-secondary transition-colors">GitHub</a>
      <a href="#" className="text-sm text-text-muted hover:text-text-secondary transition-colors">LinkedIn</a>
      <a href="#" className="text-sm text-text-muted hover:text-text-secondary transition-colors">Email</a>
    </div>
  </section>
}