import React from 'react'
import { personal } from '../data/resume'
import { motion } from 'framer-motion'
import { FaEnvelope } from 'react-icons/fa'

import profileImg from '../assets/profile.jpg'

export default function Hero(){
  return (
    <section id="home" className="mt-9 py-11">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-accent">{personal.name.split(' ')[0]}</span>
          </h1>
          <p className="mt-4 text-slate-300 max-w-xl">{personal.title} focused on backend development, automation and applied ML. Currently building scalable systems using Python and FastAPI.</p>

          <div className="mt-6 flex gap-4">
            <a href="#projects" className="px-5 py-3 rounded-md bg-accent text-white font-medium shadow">View Projects</a>
            <a href="/Revati_Ponkshe_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-5 py-3 rounded-md bg-accent text-white font-medium shadow">View Resume</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end">
          <div className="w-60 h-65 rounded-2xl overflow-hidden glass flex items-center justify-center">
            <img src={profileImg} alt="profile" className="object-cover w-full h-full" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
