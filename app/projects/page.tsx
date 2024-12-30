'use client'

import { motion } from 'framer-motion'

interface Project {
  title: string;
  description: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "Fluid Transitions",
    description: "Exploring seamless page transitions in web applications",
    category: "Animation"
  },
  {
    title: "Interactive Stories",
    description: "Creating engaging narrative experiences through code",
    category: "Development"
  },
  {
    title: "Digital Experiments",
    description: "Pushing the boundaries of web technologies",
    category: "Research"
  }
];

export default function Projects() {
  return (
    <main className="min-h-[calc(100vh-64px)] px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-12 tracking-tight text-center"
        >
          Our Work
        </motion.h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-6 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <span className="text-sm font-medium text-primary">{project.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}