import { useTranslation } from 'react-i18next'

const year = new Date().getFullYear()

export const Footer = () => {
  const { t } = useTranslation()

  return <footer className="border-t border-border py-8 text-center">
    <p className="text-xs text-text-muted">
      © {year} gazentia.dev — {t('footer.builtWith')}
    </p>
  </footer>
}