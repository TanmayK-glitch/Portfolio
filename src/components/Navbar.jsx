import { useState, useEffect } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first, then system preference, default to dark
    const stored = localStorage.getItem('darkMode')
    if (stored !== null) {
      return stored === 'true'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches || true
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    }
  }, [darkMode])

  const navItems = ['Home', 'Projects', 'Blog']

  const scrollToSection = (section) => {
    if (section === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.getElementById(section.toLowerCase())
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm border-b border-gray-200 dark:border-dark-border transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white transition-colors text-xs sm:text-sm font-medium"
            >
              {item}
            </button>
          ))}
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white transition-colors p-1.5 sm:p-2"
          aria-label="Toggle theme"
        >
          {darkMode ? <FaSun size={16} className="sm:w-[18px] sm:h-[18px]" /> : <FaMoon size={16} className="sm:w-[18px] sm:h-[18px]" />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar

