import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData.jsx'

const Footer = () => {
  // X (Twitter) icon component
  const XIcon = ({ size = 20, className = '' }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )

  const socialLinks = [
    {
      icon: XIcon,
      href: portfolioData.personal.social.twitter,
      label: 'X (Twitter)',
      color: 'text-black dark:text-white'
    },
    {
      icon: FaGithub,
      href: portfolioData.personal.social.github,
      label: 'GitHub',
      color: 'text-black dark:text-white'
    },
    {
      icon: FaLinkedin,
      href: portfolioData.personal.social.linkedin,
      label: 'LinkedIn',
      color: 'text-[#0A66C2]'
    },
  ]

  return (
    <footer className="relative border-t border-black/5 dark:border-white/5 py-16 px-6 overflow-hidden">
      
      {/* Subtle Grain Texture Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015] dark:opacity-[0.03]"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }}
      />

      <div className="max-w-4xl mx-auto flex items-center justify-between relative z-10">
        
        {/* Styled TK Mark (Replaces Tanmay) */}
        <div className="group cursor-default">
          <span className="text-5xl font-bold tracking-tighter italic text-black/10 dark:text-white/10 group-hover:text-black dark:group-hover:text-white transition-colors duration-700 ease-in-out select-none">
            TK
          </span>
        </div>

        {/* Socials with Original Colors */}
        <div className="flex items-center gap-8">
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} hover:opacity-80 transition-all duration-300 transform hover:-translate-y-1`}
                aria-label={social.label}
              >
                <Icon size={20} />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer