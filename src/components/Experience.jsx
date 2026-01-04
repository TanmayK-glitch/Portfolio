import React from 'react';
import { portfolioData } from '../data/portfolioData.jsx';

const Experience = () => {
    const { workExperience } = portfolioData;
    return (
        <section className="py-20">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">Experience</h2>
                <div className="border-t border-gray-100 dark:border-zinc-800">
                    {workExperience.map((job, index) => (
                        <div key={index} className="border-b border-gray-100 dark:border-zinc-800 py-10 group transition-colors hover:bg-gray-50/50 dark:hover:bg-zinc-900/10 px-4 -mx-4">
                            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                                <div className="flex gap-5">
                                    <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-zinc-800 flex-shrink-0 flex items-center justify-center">
                                        {job.logo?.includes('/') ? <img src={job.logo} alt="" className="w-full h-full object-cover rounded-full" /> : <span className="font-bold">{job.logo}</span>}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.company}</h3>
                                        <p className="text-sm text-gray-500 mb-4">{job.role}</p>
                                        <div className="max-w-xl text-sm md:text-base text-gray-600 dark:text-zinc-400 leading-relaxed">
                                            {job.description}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-xs font-mono text-gray-400 dark:text-zinc-500 whitespace-nowrap pt-1">
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