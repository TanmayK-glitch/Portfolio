import { useEffect, useRef } from 'react'
import { portfolioData } from '../data/portfolioData.jsx'
import { fadeIn, staggerFade } from '../utils/animations'
import { FaExternalLinkAlt, FaGithub, FaDesktop } from 'react-icons/fa'

const Projects = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    if (sectionRef.current) {
      fadeIn(sectionRef.current)
    }
    if (cardsRef.current.length > 0) {
      const validCards = cardsRef.current.filter(Boolean)
      if (validCards.length > 0) {
        staggerFade(validCards)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} id="work" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
        {portfolioData.projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-dark-border rounded-lg overflow-hidden hover:border-gray-300 dark:hover:border-white/20 transition-all group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-4">{project.description}</p>

              {project.title === "OrbitFx" && (
                <div className="flex items-start gap-2 mb-4 p-2 bg-amber-50 dark:bg-amber-900/10 border border-amber-200/50 dark:border-amber-700/30 rounded text-amber-800 dark:text-amber-200 animate-in fade-in slide-in-from-top-1 duration-300">
                  <FaDesktop className="mt-0.5 text-xs shrink-0" />
                  <span className="text-[10px] sm:text-xs leading-tight font-medium">
                    Not responsive. Best viewed on Laptop/PC.
                  </span>
                </div>
              )}

              <div className="flex items-center gap-2 mb-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-black dark:bg-white text-white dark:text-black text-xs font-medium rounded-md hover:opacity-80 transition-opacity"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  <span>Live</span>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                >
                  <FaGithub className="text-xs" />
                  <span>Code</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-200 dark:bg-white/5 rounded-full text-[10px] xs:text-xs text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

