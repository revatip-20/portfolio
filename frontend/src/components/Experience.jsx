import React from 'react'
import { experience } from '../data/resume'

export default function Experience(){
  return (
    <section id="experience" className="mt-25 py-25">
      <h2 className="text-2xl font-semibold">Experience</h2>
      <div className="mt-6 space-y-6">
        {experience.map((exp)=> (
          <div key={exp.company} className="glass p-6 rounded-xl">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{exp.role}</h3>
                <p className="text-sm text-slate-300">{exp.company} • {exp.range}</p>
              </div>
            </div>
            <ul className="mt-3 list-disc ml-5 text-slate-300">
              {exp.bullets.map((b,i)=> <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
