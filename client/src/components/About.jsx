import aboutImage from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

import { motion } from "framer-motion";
const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: { 
        x: 0, 
        opacity: 1, 
        transition: { duration: 0.5, delay: delay}
    }
});
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5}}
            className="my-20 text-center text-4xl">
            About 
            <span className="text-neutral-500"> Me</span>
        </motion.h1>
        <div className="flex sm:flex-row flex-col">
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100}}
                transition={{duration: 0.5}}
                className="w-full lg:w-1/2 lg:p-8"
            >
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl" src="https://www.computersciencedegreehub.com/wp-content/uploads/2023/02/shutterstock_535124956-scaled.jpg" alt="About Image"/>
                </div>
            </motion.div>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100}}
                transition={{duration: 1}}
                className="w-full lg:1/2"
            >
                <div className="flex sm:ml-16 justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
    </div>
  ) 
}

export default About