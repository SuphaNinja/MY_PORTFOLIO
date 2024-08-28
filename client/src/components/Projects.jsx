import React from 'react'
import { PROJECTS } from "../constants"
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2
            whileInView={{ opacity: 1, y: 0}}
            initial={{ opacity: 0, y: -100}}
            transition={{ duration: 0.5 }}
            className='my-20 text-center text-4xl'
            >
            Projects
        </motion.h2>
        <div>
            {PROJECTS.map((project, index) => (
            <div key={index} className='mb-8 flex flex-col md:flex-row lg:justify-center'>
                <motion.div
                whileInView={{ opacity: 1, x: 0}}
                initial={{ opacity: 0, x: -100}}
                transition={{ duration: 1 }}
                    className='w-full'
                    >
                    <img 
                        src={project.image} 
                        alt={project.title}
                        className='mb-12 w-full sm:w-2/3 rounded-md'
                    />
                </motion.div>
                <motion.div 
                    whileInView={{ opacity: 1, x: 0}}
                    initial={{ opacity: 0, x: 100}}
                    transition={{ duration: 1 }}
                    className='w-full max-w-xl lg:w-3/4'>
                    <a href={project.link} className='mb-2 font-semibold'>{project.title}</a>
                    <p className='mb-4 text-neutral-500'>{project.description}</p>
                    <p className='mb-4 text-neutral-500 text-xs sm:text-sm'>{project.info}</p>
                    <div className="flex justify-evenly mb-4">
                        <a 
                            href={project.link} 
                            className="bg-purple-800 text-xs sm:text-base text-center hover:cursor-pointer text-purple-200 hover:bg-purple-700 hover:text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out hover:underline"
                        >
                            Live Website
                        </a>
                        {project.githubS ? (
                            <>
                                <a 
                                    href={project.githubC} 
                                    className="bg-purple-800 text-xs sm:text-base text-center hover:cursor-pointer text-purple-200 hover:bg-purple-700 hover:text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out hover:underline"
                                >
                                    Github (client)
                                </a>
                                <a 
                                    href={project.githubS} 
                                    className="bg-purple-800 text-xs sm:text-base text-center hover:cursor-pointer text-purple-200 hover:bg-purple-700 hover:text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out hover:underline"
                                >
                                    Github (server)
                                </a>
                            </>
                        ) : (
                            <a 
                                href={project.githubC} 
                                className="bg-purple-800 text-xs sm:text-base text-center hover:cursor-pointer text-purple-200 hover:bg-purple-700 hover:text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out hover:underline"
                            >
                                Github Code
                            </a>
                        )}
                    </div>
                    <div className='flex flex-wrap'>
                        {project.technologies.map((tech, index) => (
                        <span key={index}  className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700'>
                            {tech}
                        </span>
                    ))}
                    </div>
                </motion.div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Projects