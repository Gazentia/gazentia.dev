import { useTranslation } from 'react-i18next'
import Logo from '../assets/logo.svg?react'
import { motion, type Variants } from "motion/react"

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } }, // ~40ms between graphemes
}

const charVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.1 } },
}

// Split into grapheme clusters — Thai-safe
const toGraphemes = (text: string, locale: string) => {
  const seg = new Intl.Segmenter(locale, { granularity: 'grapheme' })
  return Array.from(seg.segment(text), (s) => s.segment)
}

export const Hero = () => {
  const { t, i18n } = useTranslation()
  const greeting = t('hero.greeting')
  const graphemes = toGraphemes(greeting, i18n.language)

  return <section className="min-h-screen flex flex-col items-center justify-center pt-14 gap-6 text-center px-6">
    {/* Avatar */}
    <Logo className="w-24 h-24 text-accent-glow" />

    {/* Name + subtitle */}
    <div className="flex flex-col gap-2">
      <motion.h1
        key={i18n.language}              // re-run animation when language switches
        className="text-4xl md:text-5xl font-semibold text-text-primary font-sans"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        aria-label={greeting}            // screen readers get the whole string
      >
        {graphemes.map((g, i) => (
          <motion.span key={i} variants={charVariants} aria-hidden="true">
            {g === ' ' ? '\u00A0' : g}
          </motion.span>
        ))}
      </motion.h1>
      <p className="text-lg text-text-secondary">{t('hero.subtitle')}</p>
    </div>

    {/* Social links placeholder */}
    <div className="flex flex-wrap justify-center gap-4">
      <a href="#" className="px-4 py-2 border border-border rounded-lg text-text-muted text-sm hover:border-border-hover hover:text-text-secondary transition-all duration-300">GitHub</a>
      <a href="#" className="px-4 py-2 border border-border rounded-lg text-text-muted text-sm hover:border-border-hover hover:text-text-secondary transition-all duration-300">LinkedIn</a>
      <a href="#" className="px-4 py-2 border border-border rounded-lg text-text-muted text-sm hover:border-border-hover hover:text-text-secondary transition-all duration-300">Email</a>
    </div>
  </section>
}