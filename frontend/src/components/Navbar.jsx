import React from 'react'
import { personal } from '../data/resume'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Navbar(){
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-30 bg-transparent backdrop-blur glass py-3">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="text-white font-semibold">{personal.name.split(' ')[0]} Ponkshe (Portfolio) </div>
        <nav className="hidden md:flex gap-6 items-center text-sm text-slate-200">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href={personal.github} target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-800">
            <FaGithub />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-800">
            <FaLinkedin />
          </a>
        </nav>
      </div>
    </motion.header>
  )
}
