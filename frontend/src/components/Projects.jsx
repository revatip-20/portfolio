import React from 'react'
import { projects } from '../data/resume'
import ProjectCard from './ProjectCard'

export default function Projects(){
  return (
    <section id="projects" className="mt-12 py-12">
      <h2 className="text-2xl font-semibold">Projects</h2>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(p=> <ProjectCard key={p.title} p={p} />)}
      </div>
    </section>
  )
}
