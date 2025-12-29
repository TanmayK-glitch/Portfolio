import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiGo,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiAmazonwebservices,
  SiBun,
  SiCloudflare,
  SiTailwindcss
} from "react-icons/si";

export const portfolioData = {
  personal: {
    name: "Hey I'm Tanmay",
    age: 19,
    roles: ["Engineer", "Full Stack Developer"],
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    about: "I like starting from a blank slate and turning it into a finished product. From frontend and backend to deployment, I focus on building software that's practical, usable, and reliable.",
    social: {
      email: "mailto:vedant@example.com",
      twitter: "https://twitter.com/vedant",
      github: "https://github.com/vedant",
      linkedin: "https://linkedin.com/in/vedant",
      medium: "https://medium.com/@vedant"
    },
    location: "Pune, India",
  },
  projects: [
    {
      id: 1,
      title: "CryptoX",
      description: "Real-time crypto marketplace tracking live prices and market caps with a minimalist UI.",
      image: "/images/cryptox.png",
      liveUrl: "https://cryptox.example.com",
      githubUrl: "https://github.com/vedant/cryptox",
      technologies: ["React", "Tailwind", "API"]
    },
    {
      id: 2,
      title: "OrbitFx",
      description: "Interactive experience with smooth scrolling, custom cursor, and advanced animations.",
      image: "/images/orbitfx.png",
      liveUrl: "https://orbitfx.example.com",
      githubUrl: "https://github.com/vedant/orbitfx",
      technologies: ["React", "GSAP", "Tailwind"]
    },
    {
      id: 3,
      title: "TrackIt",
      description: "Expense tracker with category filtering, persistence, and visual spending analytics.",
      image: "/images/trackit.png",
      liveUrl: "https://trackit.example.com",
      githubUrl: "https://github.com/vedant/trackit",
      technologies: ["HTML/CSS", "JavaScript", "Local Storage"]
    },
    {
      id: 4,
      title: "Travel Clone",
      description: "Pixel-perfect recreation of the Liberty Travel homepage focusing on layout precision.",
      image: "/images/travel-clone.png",
      liveUrl: "https://travel-clone.example.com",
      githubUrl: "https://github.com/vedant/travel-clone",
      technologies: ["HTML", "CSS", "JavaScript"]
    }
  ],
  skills: [
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, color: "blue" },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, color: "yellow" },
    { name: "React/Next.js", icon: <SiNextdotjs className="text-white bg-black rounded-full" />, color: "black" },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" />, color: "green" },
    { name: "Express", icon: <SiExpress className="text-white" />, color: "white" },
    { name: "Go", icon: <SiGo className="text-cyan-500" />, color: "blue" },
    { name: "Python", icon: <SiPython className="text-blue-400" />, color: "yellow" },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" />, color: "blue" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, color: "green" },
    { name: "Prisma", icon: <SiPrisma className="text-white" />, color: "blue" },
    { name: "AWS", icon: <SiAmazonwebservices className="text-orange-500" />, color: "orange" },
    { name: "Bun", icon: <SiBun className="text-white" />, color: "white" },
    { name: "Cloudflare Workers", icon: <SiCloudflare className="text-orange-400" />, color: "orange" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, color: "teal" }
  ],
}

