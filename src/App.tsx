import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { FeatureProject } from "./components/FeatureProject"
import { ProjectGrid } from "./components/ProjectGrid"
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <FeatureProject />
      <ProjectGrid />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
