import React from 'react'
import { CONTACT } from "../constants"
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Linkedin, Github } from 'lucide-react'

const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="mb-16 text-center text-4xl font-bold text-cyan-500 sm:text-5xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Get in Touch
        </motion.h2>
        <motion.div 
          className="mx-auto max-w-2xl rounded-lg p-8 shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="space-y-6">
            <motion.div 
              className="flex items-center space-x-4"
              variants={fadeInUp}
            >
              <MapPin className="h-6 w-6 text-cyan-500" />
              <p className="text-lg text-neutral-300">{CONTACT.address}</p>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-4"
              variants={fadeInUp}
            >
              <Phone className="h-6 w-6 text-cyan-500" />
              <p className="text-lg text-neutral-300">{CONTACT.phoneNo}</p>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-4"
              variants={fadeInUp}
            >
              <Mail className="h-6 w-6 text-cyan-500" />
              <a 
                href={`mailto:${CONTACT.email}`} 
                className="text-lg text-cyan-400 transition-colors hover:text-cyan-300 hover:underline"
              >
                {CONTACT.email}
              </a>
            </motion.div>
          </div>
          <motion.div 
            className="mt-8 flex justify-center space-x-6"
            variants={fadeInUp}
          >
            <a 
              href="https://www.linkedin.com/in/sid-rico-bj%C3%B6rk/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 transition-colors hover:text-cyan-500"
            >
              <Linkedin className="h-8 w-8" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="https://github.com/suphaninja" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-400 transition-colors hover:text-cyan-500"
            >
              <Github className="h-8 w-8" />
              <span className="sr-only">GitHub</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact