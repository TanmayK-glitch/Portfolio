import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-[#000000] text-black dark:text-white transition-colors duration-300">

      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.08] dark:opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(currentColor 0.2px, transparent 1.5px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <main className="relative z-10">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>

    </div>
  )
}

export default App