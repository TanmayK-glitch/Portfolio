import { useEffect, useRef } from 'react'
import { portfolioData } from '../data/portfolioData.jsx'
import { fadeInUp, staggerFadeIn } from '../utils/animations'

const Skills = () => {
  const sectionRef = useRef(null)
  const skillsRef = useRef([])

  useEffect(() => {
    if (sectionRef.current) {
      fadeInUp(sectionRef.current)
    }
    if (skillsRef.current.length > 0) {
      staggerFadeIn(skillsRef.current)
    }
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-12">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {portfolioData.skills.map((skill, index) => (
          <div
            key={index}
            ref={(el) => (skillsRef.current[index] = el)}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#050505] border border-black/10 dark:border-white/10 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-colors cursor-default"
          >
            <span className="text-lg flex items-center justify-center">
              {skill.icon}
            </span>
            <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

