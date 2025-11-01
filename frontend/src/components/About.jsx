import React from 'react'
import { summary, skills, education } from '../data/resume'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="mt-9 py-9">
      <motion.h2 initial={{opacity:0}} animate={{opacity:1}} className="text-2xl font-semibold">About</motion.h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 glass p-6 rounded-xl">
          <p className="text-slate-200">{summary}</p>

          <div className="mt-6">
            <h3 className="font-medium">Education</h3>
            <ul className="mt-2 list-disc ml-5 text-slate-300">
              {education.map((e)=> (
                <li key={e.degree} className="mt-1">{e.degree} — {e.institute} ({e.year}) • {e.grade}</li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div initial={{x:50,opacity:0}} animate={{x:0,opacity:1}} className="glass p-6 rounded-xl">
          <h3 className="font-medium">Skills</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map(s=> (
              <span key={s} className="text-sm px-3 py-1 bg-slate-800 rounded-full">{s}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
