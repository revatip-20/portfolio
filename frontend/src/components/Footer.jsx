import React from 'react'
import { personal } from '../data/resume'

export default function Footer(){
  return (
    <footer className="py-6 mt-12 border-t border-slate-800 text-center text-slate-400">
      <div className="container mx-auto">© {new Date().getFullYear()} {personal.name} • Built with React — <a href={personal.github} className="underline">GitHub</a> • <a href={personal.linkedin} className="underline">LinkedIn</a></div>
    </footer>
  )
}
