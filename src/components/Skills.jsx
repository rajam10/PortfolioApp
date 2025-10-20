import React, { useState } from 'react'

const CATEGORIES = [
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database' },
  { id: 'cloud', label: 'Cloud & DevOps' },
  { id: 'tools', label: 'Tools' },
]
const PLACEHOLDER = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'React JS', 'Redux', 'jQuery', 'Ajax'],
  backend: ['Node JS', 'Express JS'],
  database: ['MySQL', 'MongoDB'],
  tools: ['MySQL Workbench', 'Freshdesk', 'Jira', 'Postman'],
  cloud: ['AWS', 'Git'],
}

export default function Skills() {
  const [active, setActive] = useState('frontend')

  const details = PLACEHOLDER[active] || []

  return (
    <section id="skills" className="py-12">
      <div className="container">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-violet-700">Skills</h3>
        </div>

        <div className="mt-6 skills-layout card-surface" style={{ color: 'var(--text)' }}>
          <aside className="category-list" aria-label="Skill categories" style={{ color: 'var(--text)' }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`category-btn ${active === cat.id ? 'active' : ''}`}
                onClick={() => setActive(cat.id)}
                aria-pressed={active === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </aside>

          <div className="skills-detail" style={{ color: 'var(--text)' }} aria-live="polite">
            <h4 className="text-lg font-semibold text-800 dark:text-text">{CATEGORIES.find(c => c.id === active).label}</h4>
            {details.length === 0 ? (
              <div className="mt-4 subtle">No skills added yet for this category. You can add items later.</div>
            ) : (
              <div className="mt-4 skills-grid">
                {details.map(s => (
                  <div key={s} className="skill-pill">{s}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}