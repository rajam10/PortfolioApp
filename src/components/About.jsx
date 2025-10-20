import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-12">
      <div className="container">
        <div className="card-surface">
          <h3 className="text-2xl font-semibold text-violet-700 dark:text-violet-300">About Me</h3>
          <p className="mt-4" style={{ color: 'var(--text)' }}>
            I am a detail-oriented and solution-driven Software Engineer with 4+ years of hands-on experience
 building scalable and responsive applications using HTML, CSS, JavaScript, React JS, and MySQL.
 Proven track record of designing and deploying custom software solutions. Adept at collaborating
 with cross-functional teams, translating business requirements into intuitive interfaces, and
 ensuring seamless user experiences. Strong expertise in debugging, optimization, and full-cycle
 application development. A proactive problem-solving mindset, and the ability to thrive in fast-paced environments while consistently meeting project deadlines.</p>
        </div>
      </div>
    </section>
  )
}