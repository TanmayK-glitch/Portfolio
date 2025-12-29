import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData.jsx';
import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';
import { motion } from 'framer-motion';

const About = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

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
  );

  return (
    <section id="home" className="relative min-h-screen text-[#111111] dark:text-[#f0f0f0] selection:bg-blue-500/20 transition-colors duration-500 overflow-hidden">

      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 lg:top-10 lg:right-10 pointer-events-none select-none z-0 overflow-hidden">
        <span className="text-[18vw] sm:text-[22vw] md:text-[26vw] lg:text-[30vw] font-semibold text-black/[0.04] dark:text-white/[0.04] sm:text-black/[0.05] dark:sm:text-white/[0.05] md:text-black/[0.06] dark:md:text-white/[0.06] lg:text-black/[0.07] dark:lg:text-white/[0.07] leading-none tracking-tighter block">
          神
        </span>
      </div>

      <nav className="fixed top-0 w-full z-50 backdrop-blur-md px-6 py-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex gap-8">
            {['Home', 'Projects'].map((item) => (
              <a key={item} href={item === 'Projects' ? '#work' : `#${item.toLowerCase()}`} className="text-[10px] uppercase tracking-[0.3em] font-medium text-gray-400 hover:text-black dark:hover:text-white transition-colors font-accent">
                {item}
              </a>
            ))}
          </div>
          <button onClick={toggleTheme} className="text-gray-400 hover:text-black dark:hover:text-white">
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>
      </nav>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 md:pt-48 pb-20">

        <div className="flex flex-col items-start text-left mb-20 space-y-8">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-black dark:text-white leading-none">
                Hey I'm <span className="relative inline-block ml-1 md:ml-2">
                  <span className="relative z-10 text-white dark:text-black px-1 md:px-2">Tanmay</span>
                  <span className="absolute top-[-4px] left-[-6px] right-[-6px] bottom-[-4px] md:top-[-8px] md:left-[-10px] md:right-[-10px] md:bottom-[-8px] lg:top-[-12px] lg:left-[-12px] lg:right-[-12px] lg:bottom-[-12px] bg-black dark:bg-white -rotate-1 md:-rotate-2 z-0"></span>
                </span>
              </h1>
            </div>

            <div className="flex items-center gap-3 text-gray-500 font-medium text-sm md:text-lg">
              <span>{portfolioData.personal.age}</span>
              <span className="text-gray-300 dark:text-white/10">•</span>
              <span>{portfolioData.personal.roles[0]}</span>
              <span className="text-gray-300 dark:text-white/10">•</span>
              <span>{portfolioData.personal.roles[1]}</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xl">
            <a href={portfolioData.personal.social.email} className="text-[#EA4335] hover:text-[#EA4335] transition-colors"><SiGmail /></a>
            <a href={portfolioData.personal.social.twitter} target="_blank" rel="noreferrer" className="text-black dark:text-white hover:opacity-80 transition-opacity"><XIcon /></a>
            <a href={portfolioData.personal.social.github} target="_blank" rel="noreferrer" className="text-black dark:text-white hover:opacity-80 transition-opacity"><FaGithub /></a>
            <a href={portfolioData.personal.social.linkedin} target="_blank" rel="noreferrer" className="text-[#0A66C2] hover:text-[#0A66C2] transition-colors"><FaLinkedin /></a>

            <div className="inline-flex items-center gap-3 px-3 py-1.5 bg-gray-400/5 dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-full transition-all duration-300 hover:bg-gray-400/10 dark:hover:bg-white/[0.06]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400 font-medium font-accent">
                Available for work
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">About</h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
            {portfolioData.personal.about}
          </p>


        </div>

      </div>
    </section>
  );
};

export default About;