import { motion } from 'motion/react'
import type { Variants } from 'motion/react'
import { useTranslation } from "react-i18next"
import projects from "../data/projects.json"
import { ProjectCard, PlaceholderCard } from "./cards"
import type { IProject } from "../types"

const TOTAL_SLOTS = 6
const placeholderCount = Math.max(0, TOTAL_SLOTS - projects.length)

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } }
}

export const ProjectGrid = () => {
  const { t } = useTranslation()

  return <section id="projects" className="max-w-4xl mx-auto px-6 py-14 md:py-20">
    <p className="text-xs font-medium tracking-[2px] text-accent mb-8">{t('projects.label')}</p>
    <motion.div variants={containerVariants} className="grid grid-col-1 md:grid-cols-2 gap-3" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
      {Array.isArray(projects) && (projects as unknown as IProject[]).map((project, index) => (<motion.div key={`project-${index}`} variants={itemVariants}><ProjectCard data={project} /></motion.div>))}
      {Array.from({ length: placeholderCount }).map((_, index) => <motion.div key={`placeholder-${index}`} variants={itemVariants}><PlaceholderCard /></motion.div>)}
    </motion.div>
  </section>
}