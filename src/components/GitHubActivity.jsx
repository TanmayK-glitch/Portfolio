import { useEffect, useRef } from 'react'
import { portfolioData } from '../data/portfolioData'
import { fadeInUp } from '../utils/animations'
import { FaExternalLinkAlt } from 'react-icons/fa'

const GitHubActivity = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (sectionRef.current) {
      fadeInUp(sectionRef.current)
    }
  }, [])

  // Generate a simple heatmap visualization
  const generateHeatmap = () => {
    const weeks = 52
    const daysPerWeek = 7
    const squares = []

    for (let week = 0; week < weeks; week++) {
      for (let day = 0; day < daysPerWeek; day++) {
        // Random contribution level for demo (0-4)
        const level = Math.floor(Math.random() * 5)
        squares.push(level)
      }
    }

    return squares
  }

  const heatmapData = generateHeatmap()

  const getColor = (level) => {
    const colors = [
      'bg-gray-800', // 0
      'bg-gray-700', // 1
      'bg-gray-600', // 2
      'bg-gray-500', // 3
      'bg-gray-400', // 4
    ]
    return colors[level] || colors[0]
  }

  return (
    <section ref={sectionRef} id="github" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">GitHub Activity</h2>
      
      <div className="bg-dark-surface border border-dark-border rounded-lg p-4 sm:p-6">
        <div className="mb-4 sm:mb-6">
          <p className="text-gray-400 text-xs sm:text-sm mb-2">
            {portfolioData.githubActivity.contributions} contributions in the last year
          </p>
        </div>

        {/* Heatmap */}
        <div className="mb-4 sm:mb-6 overflow-x-auto -mx-4 sm:-mx-6 px-4 sm:px-6">
          <div className="flex gap-0.5 sm:gap-1 min-w-max">
            {heatmapData.map((level, index) => (
              <div
                key={index}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded ${getColor(level)} hover:ring-2 ring-white/50 transition-all`}
                title={`${level} contributions`}
              />
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <span className="text-gray-400 text-[10px] sm:text-xs">Less</span>
          <div className="flex gap-0.5 sm:gap-1">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded bg-gray-800" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded bg-gray-700" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded bg-gray-600" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded bg-gray-500" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded bg-gray-400" />
          </div>
          <span className="text-gray-400 text-[10px] sm:text-xs">More</span>
        </div>

        {/* Follow link */}
        <div className="text-center sm:text-right">
          <a
            href={portfolioData.githubActivity.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-xs sm:text-sm"
          >
            Follow me on GitHub
            <FaExternalLinkAlt className="text-[10px] sm:text-xs" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default GitHubActivity

