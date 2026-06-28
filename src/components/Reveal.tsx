import { motion, type Variants } from 'motion/react'
import type { ReactNode } from 'react'

export interface IRevealProps {
  children: ReactNode
  delay?: number
}

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export const Reveal: React.FC<IRevealProps> = ({ children, delay = 0 }) => {
  return <motion.div
    variants={revealVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6, ease: 'easeOut', delay }}
  >
    {children}
  </motion.div>
}