import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function ProjectCard({p}){
  return (
    <motion.a href={p.github} target="_blank" rel="noreferrer" whileHover={{ y: -6 }} className="block glass p-5 rounded-xl">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-semibold text-lg">{p.title}</h4>
          <p className="text-sm text-slate-300 mt-2">{p.desc}</p>
        </div>
        <div className="text-slate-300"><FaGithub /></div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tech.map(t=> <span key={t} className="text-xs px-2 py-1 bg-slate-800 rounded">{t}</span>)}
      </div>
    </motion.a>
  )
}
