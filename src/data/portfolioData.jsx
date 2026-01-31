import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiGreensock,
    SiNodedotjs,
    SiExpress,
    SiPython,
    SiFastapi,
    SiPostgresql,
    SiVercel,
    SiGit,
    SiGithub,
    SiTailwindcss,
    SiSupabase
} from "react-icons/si";

export const portfolioData = {
    personal: {
        name: "Hey I'm Tanmay",
        age: 19,
        roles: ["Engineer", "Full Stack Developer"],
        about: "I'm a 19-year-old computer science student and full-stack developer passionate about building real-world solutions. I love exploring the complete development cycle from front-end design to back-end architecture. Currently, I'm diving deep into artificial intelligence and finding ways to integrate it into practical applications. For me, the best way to learn is by building, and I'm always working on projects that challenge me and solve genuine problems.",
        social: {
            email: "mailto:tanmayk.code@gmail.com",
            twitter: "https://x.com/Ktanmay19",
            github: "https://github.com/TanmayK-glitch",
            linkedin: "https://www.linkedin.com/in/tanmay-kangule-921234338/",
        },
        location: "Pune, India"
    },
    workExperience: [
        {
            company: "Thyright Innovations",
            role: "Full Stack Developer",
            logo: "/images/thyright-logo.png",
            startDate: "Jan 2026",
            endDate: "Present",
            description: "Sole Full Stack Developer Intern in a 4-member core team. Developed scalable web application features using React, FastAPI and PostgreSQL for a digital health platform focused on thyroid disease management.."
        }
    ],
    projects: [
        {
            id: 5,
            title: "Proxy - Attendence Tracker",
            description: "Proxy is a web app that helps college students track subject-wise attendance, view safe-to-skip class limits, and avoid detention, with secure Google authentication and real-time updates.",
            image: "/images/proxy.png",
            liveUrl: "https://proxy-inky-omega.vercel.app/",
            technologies: ["React", "Tailwind", "JavaScript", "Supabase", "Google Auth", "PostgreSQL"]
        },
        {
            id: 1,
            title: "CryptoX",
            description: "Real-time crypto marketplace tracking live prices and market caps with a minimalist UI.",
            image: "/images/cryptox.png",
            liveUrl: "https://crypto-x-kohl.vercel.app/",
            githubUrl: "https://github.com/TanmayK-glitch/CryptoX.git",
            technologies: ["React", "React Router", "Javascript", "TailwindCSS", "API"]
        },
        {
            id: 2,
            title: "OrbitFx",
            description: "Interactive experience with smooth scrolling, custom cursor, and advanced animations.",
            image: "/images/orbitfx.png",
            liveUrl: "https://orbitfx.vercel.app/",
            githubUrl: "https://github.com/TanmayK-glitch/GSAP_Project.git",
            technologies: ["React", "GSAP", "TailwindCSS"]
        },
        {
            id: 3,
            title: "TrackIt",
            description: "Expense tracker with category filtering, persistence, and visual spending analytics.",
            image: "/images/trackit.png",
            liveUrl: "https://trackitapp-phi.vercel.app/",
            githubUrl: "https://github.com/TanmayK-glitch/Trackit.git",
            technologies: ["HTML/CSS", "JavaScript", "Local Storage"]
        },
        {
            id: 4,
            title: "Travel Clone",
            description: "Pixel-perfect recreation of the Liberty Travel homepage focusing on layout precision.",
            image: "/images/travel-clone.png",
            liveUrl: "https://travel-clone-nine.vercel.app/",
            githubUrl: "https://github.com/TanmayK-glitch/Travel-Clone.git",
            technologies: ["HTML", "CSS", "JavaScript"]
        },

    ],
    skills: [
        { name: "HTML", icon: <SiHtml5 className="text-orange-600" />, color: "orange" },
        { name: "CSS", icon: <SiCss3 className="text-blue-500" />, color: "blue" },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, color: "yellow" },
        { name: "React", icon: <SiReact className="text-cyan-400" />, color: "cyan" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 dark:text-teal-400" />, color: "teal" },
        { name: "GSAP", icon: <SiGreensock className="text-green-600 dark:text-green-500" />, color: "green" },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600 dark:text-green-500" />, color: "green" },
        { name: "ExpressJS", icon: <SiExpress className="text-gray-900 dark:text-white" />, color: "white" },
        { name: "Python", icon: <SiPython className="text-blue-500 dark:text-blue-400" />, color: "yellow" },
        { name: "FastAPI", icon: <SiFastapi className="text-teal-600 dark:text-teal-500" />, color: "teal" },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600 dark:text-blue-400" />, color: "blue" },
        { name: "Vercel", icon: <SiVercel className="text-gray-900 dark:text-white" />, color: "black" },
        { name: "Git", icon: <SiGit className="text-orange-600" />, color: "orange" },
        { name: "GitHub", icon: <SiGithub className="text-gray-900 dark:text-white" />, color: "black" },
        { name: "Supabase", icon: <SiSupabase className="text-emerald-600 dark:text-emerald-400" />, color: "emerald" }


    ],
}
