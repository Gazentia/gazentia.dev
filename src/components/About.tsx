const TAGS = ['JavaScript', 'TypeScript', 'React.js', 'React Admin', 'Material UI', 'Node.js', 'Strapi', 'GitLab CI/CD', 'Figma']

export const About = () => {
  return <section id="about" className="max-w-4xl mx-auto px-6 py-20">
    <p className="text-xs font-medium tracking-[2px] text-accent mb-8">
      ABOUT
    </p>

    <div className="flex flex-col md:flex-row gap-12">
      {/* Bio */}
      <div className="flex-1">
        <p className="text-base leading-relaxed text-text-secondary">
          Web Developer with 3+ years of experience building web applications
          using React.js and Node.js. Well-versed in frontend development with
          Material UI, backend management via Strapi, and supporting development
          team operations including technical planning and code reviews to
          uphold project standards.
        </p>
      </div>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 content-start md:w-[260px]">
        {TAGS.map(tag => (<span key={tag} className="px-2.5 py-1 rounded bg-accent-bg text-accent-light text-xs font-mono hover:bg-accent-mid hover:scale-105 transition-all duration-150">{tag}</span>))}
      </div>
    </div>
  </section>
}