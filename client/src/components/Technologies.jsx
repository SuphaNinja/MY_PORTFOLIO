import React from 'react'
import { RiReactjsLine, RiTailwindCssLine } from "react-icons/ri"
import { TbBrandNextjs, TbBrandVercel } from "react-icons/tb"
import { FaNodeJs, FaAws } from "react-icons/fa"
import { SiPrisma, SiMysql } from "react-icons/si"
import { AiOutlineOpenAI } from "react-icons/ai"
import { motion } from "framer-motion"

const technologies = [
  { Icon: RiReactjsLine, name: "React", color: "text-cyan-400", duration: 1 },
  { Icon: TbBrandNextjs, name: "Next.js", color: "text-white", duration: 2 },
  { Icon: FaNodeJs, name: "Node.js", color: "text-green-500", duration: 3 },
  { Icon: SiPrisma, name: "Prisma", color: "text-white", duration: 4 },
  { Icon: RiTailwindCssLine, name: "Tailwind", color: "text-cyan-500", duration: 5 },
  { Icon: AiOutlineOpenAI, name: "OpenAI", color: "text-white", duration: 4 },
  { Icon: TbBrandVercel, name: "Vercel", color: "text-white", duration: 3 },
  { Icon: FaAws, name: "AWS", color: "text-yellow-400", duration: 2 },
  { Icon: SiMysql, name: "MySQL", color: "text-blue-400", duration: 1 },
]

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

const Technologies = () => {
  return (
    <section id="technologies" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="mb-16 text-center text-4xl font-bold text-cyan-500 sm:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technologies
        </motion.h2>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {technologies.map(({ Icon, name, color, duration }, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={iconVariants(duration)}
              initial="initial"
              animate="animate"
            >
              <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-colors duration-300 hover:border-cyan-500">
                <Icon className={`text-6xl ${color}`} />
              </div>
              <span className="mt-2 text-sm font-medium text-neutral-400">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Technologies