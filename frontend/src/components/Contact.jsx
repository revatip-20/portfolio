import React, { useState } from 'react'
import { personal } from '../data/resume'

export default function Contact(){
  const [form, setForm] = useState({name:'',email:'',message:''})
  const [sent, setSent] = useState(false)

  function onChange(e){
    setForm(prev=> ({...prev, [e.target.name]: e.target.value}))
  }

async function submit(e){
  e.preventDefault()
  const response = await fetch("http://127.0.0.1:8000/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form)
  })
  const data = await response.json()
  if (data.success) {
    setSent(true)
    setForm({name:'',email:'',message:''})
  }
}


  return (
    <section id="contact" className="mt-12 py-12">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass p-6 rounded-xl">
          <h3 className="font-medium">Get in touch</h3>
          <p className="mt-2 text-slate-300">Email: <a href={`mailto:${personal.email}`}>{personal.email}</a></p>
          <p className="mt-1 text-slate-300">Phone: {personal.phone}</p>
          <p className="mt-4 text-sm text-slate-400">Download Resume: <a href="/Revati_Ponkshe_Resume.pdf" className="underline">PDF</a></p>
        </div>

        <form onSubmit={submit} className="glass p-6 rounded-xl">
          {sent && <div className="mb-3 text-green-400">Message sent — thank you!</div>}
          <input name="name" value={form.name} onChange={onChange} className="w-full p-3 rounded bg-slate-900 text-slate-100" placeholder="Your name" required />
          <input name="email" value={form.email} onChange={onChange} className="w-full p-3 rounded bg-slate-900 text-slate-100 mt-3" placeholder="Your email" required />
          <textarea name="message" value={form.message} onChange={onChange} className="w-full p-3 rounded bg-slate-900 text-slate-100 mt-3" placeholder="Message" rows={4} required />
          <button type="submit" className="mt-3 px-4 py-2 bg-accent rounded text-white">Send message</button>
        </form>
      </div>
    </section>
  )
}
