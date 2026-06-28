import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { FeatureProject } from "./components/FeatureProject"
import { ProjectGrid } from "./components/ProjectGrid"
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Reveal } from "./components/Reveal"

const App = () => {
  const { i18n } = useTranslation()
  useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return (
    <main>
      <Navbar />
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal><FeatureProject /></Reveal>
      <Reveal><ProjectGrid /></Reveal>
      <Reveal><Contact /></Reveal>
      <Footer />
    </main>
  )
}

export default App
