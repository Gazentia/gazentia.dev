import { useTranslation } from "react-i18next"
import Logo from "../assets/logo.svg?react"

export const FeatureProject = () => {
  const { t } = useTranslation()

  return <section id="featured" className="max-w-4xl mx-auto px-6 py-20">
    <p className="text-xs font-medium tracking-[2px] text-accent mb-8">{t('featured.label')}</p>
    <div className="bg-bg-card border border-border border-dashed rounded-xl overflow-hidden">
      {/* Screenshot area - 16:9 */}
      <div className="aspect-video bg-bg-elevated flex flex-col items-center justify-center gap-3">
        <Logo className="w-14 h-14 text-text-muted opacity-40" />
        <p className="text-sm text-text-muted">{t('featured.comingSoon')}</p>
      </div>
    </div>
  </section>
}