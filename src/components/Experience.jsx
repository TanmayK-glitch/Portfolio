import React, { useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData.jsx';
import { staggerFade, slideInFromBottom } from '../utils/animations';

const Experience = () => {
    const { workExperience } = portfolioData;
    const headingRef = useRef(null);
    const timelineRef = useRef([]);

    useEffect(() => {
        if (headingRef.current) slideInFromBottom(headingRef.current);
        if (timelineRef.current.length > 0) {
            staggerFade(timelineRef.current.filter(Boolean), 0.2);
        }
    }, []);

    return (
        <section className="py-20">
            <div className="max-w-4xl mx-auto px-6">
                <h2 ref={headingRef} className="text-3xl font-bold mb-12 text-gray-900 dark:text-white opacity-0">Experience</h2>
                <div className="border-t border-gray-100 dark:border-zinc-800">
                    {workExperience.map((job, index) => (
                        <div
                            key={index}
                            ref={el => timelineRef.current[index] = el}
                            className="border-b border-gray-100 dark:border-zinc-800 py-10 group transition-colors hover:bg-gray-50/50 dark:hover:bg-zinc-900/10 px-4 -mx-4 opacity-0"
                        >
                            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-6">
                                <div className="flex gap-4 sm:gap-5">
                                    <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-zinc-800 flex-shrink-0 flex items-center justify-center mt-1">
                                        {job.logo?.includes('/') ? <img src={job.logo} alt="" className="w-full h-full object-cover rounded-full" /> : <span className="font-bold">{job.logo}</span>}
                                    </div>
                                    <div>
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-tight">{job.company}</h3>
                                        <p className="text-sm text-gray-500 mb-3 sm:mb-4">{job.role}</p>
                                        <div className="max-w-xl text-sm sm:text-base text-gray-600 dark:text-zinc-400 leading-relaxed">
                                            {job.description}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-xs font-mono text-gray-400 dark:text-zinc-500 whitespace-nowrap pl-[4.25rem] sm:pl-0 sm:pt-1">
                                    {job.startDate} — {job.endDate}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Experience;