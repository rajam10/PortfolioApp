import { experiences } from '../data/experiences'

export default function Projects() {

  return (
    <section id="projects" className="py-12">
      <div className="container">
        <h3 className="text-2xl font-semibold text-violet-700">Work Experience</h3>
        <div className="mt-6 grid gap-6">
          {experiences.map(exp => (
            <article key={exp.id} className="card-surface">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-900">{exp.role} — {exp.company}</h4>
                  <div className="text-sm subtle mt-1">{exp.period} • {exp.location}</div>
                  <ul className='fs-15 pl-4' style={{listStyle: 'disc'}}>
                    {exp.desc.map((line, idx) => (
                      <li key={idx} className="mt-2" style={{ color: 'var(--text)' }}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}