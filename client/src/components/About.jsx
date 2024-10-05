import React from 'react'
import { motion } from "framer-motion"
import { ABOUT_TEXT } from "../constants"

const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const About = () => {
    const handleScrollToContact = (e) => {
        e.preventDefault()
        const contactSection = document.getElementById('contact')
        if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
    }
}
    
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="mb-16 text-center text-4xl font-bold text-cyan-500 sm:text-5xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          About <span className="text-neutral-300">Me</span>
        </motion.h2>
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between">
          <motion.div
            className="w-full max-w-md lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <img 
              className="rounded-2xl shadow-2xl"
              src="https://www.computersciencedegreehub.com/wp-content/uploads/2023/02/shutterstock_535124956-scaled.jpg" 
              alt="About Me"
            />
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-lg leading-relaxed text-neutral-300">
              {ABOUT_TEXT}
            </p>
            <motion.div 
              className="mt-8"
              variants={fadeInUp}
            >
              <button 
                onClick={handleScrollToContact}
                className="inline-block rounded-full bg-cyan-500 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-neutral-950"
              >
                Get in Touch
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About