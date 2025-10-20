import React from 'react'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="container">
        <h3 className="text-2xl font-semibold text-violet-700">Projects</h3>
        <div className="mt-6 grid gap-6">
          {projects.map(p => (
            <article key={p.id} className="card-surface">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-800 dark:text-text">{p.title}</h4>
                  <p className="text-sm subtle mt-2">{p.description}</p>
                </div>
                <div className="text-sm muted">{p.tech.join(' • ')}</div>
              </div>
              <div className="mt-4">
                <a href={p.link} className="text-sm text-violet-600 dark:text-violet-200 hover:underline">View</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}