import React from 'react'
import { PROJECTS } from "../constants"
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-16 text-center text-4xl font-bold text-cyan-500 sm:text-5xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Projects
        </motion.h2>
        <div className="space-y-32">
          {PROJECTS.map((project, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="mb-8 w-full lg:w-1/2 lg:pr-8">
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-lg shadow-2xl transition-all duration-300 hover:shadow-cyan-500/30"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ExternalLink className="h-12 w-12 text-white" />
                  </div>
                </a>
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="mb-4 text-3xl font-bold text-cyan-400">
                  <a href={project.link} className="hover:underline">{project.title}</a>
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-neutral-300">{project.description}</p>
                <p className="mb-6 text-sm leading-relaxed text-neutral-400">{project.info}</p>
                <div className="mb-6 flex flex-wrap gap-4">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-neutral-950"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Website
                  </a>
                  <a 
                    href={project.githubC}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center rounded-full bg-neutral-700 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-neutral-600 hover:shadow-lg hover:shadow-neutral-700/30 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-neutral-950"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    {project.githubS ? "Github (client)" : "Github Code"}
                  </a>
                  {project.githubS && (
                    <a 
                      href={project.githubS}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="inline-flex items-center rounded-full bg-neutral-700 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-neutral-600 hover:shadow-lg hover:shadow-neutral-700/30 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-neutral-950"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Github (server)
                    </a>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="rounded-full bg-neutral-800 px-4 py-2 text-sm font-medium text-cyan-400 shadow-md transition-all duration-300 hover:bg-neutral-700 hover:shadow-lg hover:shadow-cyan-500/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects