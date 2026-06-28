import { useTranslation } from "react-i18next"
import projects from "../data/projects.json"
import { ProjectCard, PlaceholderCard } from "./cards"
import type { IProject } from "../types"

const TOTAL_SLOTS = 6
const placeholderCount = Math.max(0, TOTAL_SLOTS - projects.length)

export const ProjectGrid = () => {
  const { t } = useTranslation()

  return <section id="projects" className="max-w-4xl mx-auto px-6 py-14 md:py-20">
    <p className="text-xs font-medium tracking-[2px] text-accent mb-8">{t('projects.label')}</p>
    <div className="grid grid-col-1 md:grid-cols-2 gap-3">
      {Array.isArray(projects) && (projects as unknown as IProject[]).map((project, index) => (<ProjectCard key={`project-${index}`} data={project} />))}
      {Array.from({ length: placeholderCount }).map((_, index) => <PlaceholderCard key={`placeholder-${index}`} />)}
    </div>
  </section>
}