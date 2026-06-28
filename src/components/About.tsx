import { useTranslation } from 'react-i18next'

const TAGS = ['JavaScript', 'TypeScript', 'React.js', 'React Admin', 'Material UI', 'Node.js', 'Strapi', 'GitLab CI/CD', 'Figma']

export const About = () => {
  const { t } = useTranslation()

  return <section id="about" className="max-w-4xl mx-auto px-6 py-14 md:py-20">
    <p className="text-xs font-medium tracking-[2px] text-accent mb-8">
      {t('about.label')}
    </p>

    <div className="flex flex-col md:flex-row gap-12">
      {/* Bio */}
      <div className="flex-1">
        <p className="text-base leading-relaxed text-text-secondary">
          {t('about.bio')}
        </p>
      </div>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 content-start md:w-[260px]">
        {TAGS.map(tag => (<span key={tag} className="px-2.5 py-1 rounded bg-accent-bg text-accent-light text-xs font-mono hover:bg-accent-mid hover:scale-105 transition-all duration-150">{tag}</span>))}
      </div>
    </div>
  </section>
}