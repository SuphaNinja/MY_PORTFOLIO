import { FaLinkedin, FaGithub } from "react-icons/fa"
import { motion } from "framer-motion"

const NavBar = () => {
  return (
    <nav className="mb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div 
            className="flex flex-shrink-0 items-center text-2xl font-bold text-cyan-500 sm:text-3xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            S.R.B
          </motion.div>
          <div className="flex items-center space-x-4">
            {[
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/sid-rico-bj%C3%B6rk/" },
              { icon: FaGithub, href: "https://github.com/SuphaNinja" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 transition-colors hover:text-cyan-500"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <item.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                <span className="sr-only">{item.icon.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar