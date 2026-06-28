import { About } from "./components/About"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { ProjectGrid } from "./components/ProjectGrid"

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <ProjectGrid />
    </main>
  )
}

export default App
