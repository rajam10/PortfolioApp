import React, { useState } from 'react'
import { experiences } from '../data/experiences'

export default function Projects() {
  const [openExp, setOpenExp] = useState(null)

  return (
    <section id="projects" className="py-12">
      <div className="container">
        <h3 className="text-2xl font-semibold text-violet-700">Work Experience</h3>

        <div className="mt-6 grid gap-6">
          {experiences.map(exp => (
            <article key={exp.id} className="card-surface">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-text">{exp.role} — {exp.company}</h4>
                  <div className="text-sm subtle mt-1">{exp.period} • {exp.location}</div>
                  <ul className='fs-15 pl-4' style={{listStyle: 'disc'}}>
                    {exp.desc.map((line, idx) => (
                      <li key={idx} className="mt-2" style={{ color: 'var(--text)' }}>{line}</li>
                    ))}
                  </ul>
                </div>
                {/* <div className="flex items-center gap-2">
                  <button className="btn btn-ghost" onClick={() => setOpenExp(exp.id)}>Projects</button>
                </div> */}
              </div>
            </article>
          ))}
        </div>

        {/* {experiences.map(exp => (
          <Modal key={exp.id} open={openExp === exp.id} onClose={() => setOpenExp(null)} title={`${exp.company} — Projects`}>
            <div className="space-y-4">
              {exp.projects.map(p => (
                <div key={p.id} className="card-surface">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-md font-semibold">{p.title}</h4>
                      <p className="text-sm subtle mt-1">{p.description}</p>
                    </div>
                    <div className="text-sm muted">{p.tech.join(' • ')}</div>
                  </div>
                </div>
              ))}
            </div>
          </Modal>
        ))} */}
      </div>
    </section>
  )
}