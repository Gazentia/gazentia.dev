import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { FeatureProject } from "./components/FeatureProject"
import { ProjectGrid } from "./components/ProjectGrid"

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <FeatureProject />
      <ProjectGrid />
    </main>
  )
}

export default App
