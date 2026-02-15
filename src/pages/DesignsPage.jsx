import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { flushSync } from 'react-dom';
import { FiSun, FiMoon } from 'react-icons/fi';
import { FaArrowLeft } from 'react-icons/fa';
import { designsData } from '../data/designsData';
import Footer from '../components/Footer';

const DesignsPage = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const stored = localStorage.getItem('theme');
        if (stored) return stored === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    const [hoveredCard, setHoveredCard] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const toggleTheme = async () => {
        if (!document.startViewTransition) {
            setDarkMode(!darkMode);
            document.documentElement.classList.toggle('dark');
            return;
        }

        document.documentElement.classList.add('disable-transitions');

        try {
            await document.startViewTransition(() => {
                flushSync(() => {
                    setDarkMode(!darkMode);
                    document.documentElement.classList.toggle('dark');
                });
            }).finished;
        } finally {
            document.documentElement.classList.remove('disable-transitions');
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            }
        }
    };

    return (
        <div className="relative min-h-screen bg-white dark:bg-[#000000] text-black dark:text-white transition-colors duration-300">
            <div
                className="fixed inset-0 pointer-events-none z-0 opacity-[0.08] dark:opacity-[0.12]"
                style={{
                    backgroundImage: `radial-gradient(currentColor 0.2px, transparent 1.5px)`,
                    backgroundSize: '24px 24px'
                }}
            />

            <nav className="fixed top-0 w-full z-50 backdrop-blur-md px-6 py-6">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-8">
                        <Link
                            to="/"
                            className="text-[10px] uppercase tracking-[0.3em] font-medium text-gray-400 hover:text-black dark:hover:text-white transition-colors font-accent"
                        >
                            Home
                        </Link>
                        <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-black dark:text-white font-accent">
                            Designs
                        </span>
                    </div>
                    <button onClick={toggleTheme} className="text-gray-400 hover:text-black dark:hover:text-white">
                        {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                    </button>
                </div>
            </nav>

            <main className="relative z-10">
                {/* Hero Section */}
                <section className="pt-32 md:pt-44 pb-12 md:pb-16 px-6">
                    <div className="max-w-4xl mx-auto">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-black dark:hover:text-white transition-colors mb-8 font-accent uppercase tracking-[0.2em]"
                        >
                            <FaArrowLeft size={10} />
                            Back to portfolio
                        </Link>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="text-4xl md:text-7xl font-bold tracking-tighter text-black dark:text-white leading-none mb-4"
                        >
                            Design <span className="text-gray-400 dark:text-white/30">Showcase</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                            className="text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-xl leading-relaxed"
                        >
                            A collection of hero sections and landing pages — exploring visual identity, bold typography, and immersive design.
                        </motion.p>
                    </div>
                </section>

                {/* Designs Grid */}
                <section className="px-6 pb-20">
                    <motion.div
                        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {designsData.map((design) => (
                            <motion.div
                                key={design.id}
                                variants={cardVariants}
                                onMouseEnter={() => setHoveredCard(design.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                className="group relative rounded-xl overflow-hidden cursor-pointer"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${design.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`} />

                                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-dark-border group-hover:border-gray-300 dark:group-hover:border-white/20 shadow-md group-hover:shadow-xl dark:shadow-none transition-all duration-300">
                                    {design.videoUrl ? (
                                        <video
                                            src={design.videoUrl}
                                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        />
                                    ) : (
                                        <img
                                            src={design.image}
                                            alt={design.title}
                                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                            loading="lazy"
                                        />
                                    )}

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-5">
                                        <h3 className="text-white text-lg font-semibold mb-1 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                                            {design.title}
                                        </h3>
                                        <p className="text-white/70 text-xs leading-relaxed translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                            {design.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-1.5 mt-3 px-1">
                                    {design.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2.5 py-0.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-[10px] text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wider"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                <Footer />
            </main>
        </div>
    );
};

export default DesignsPage;
