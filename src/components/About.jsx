import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-12">
      <div className="container">
        <div className="card-surface">
          <h3 className="text-2xl font-semibold text-violet-700 dark:text-violet-300">About Me</h3>
          <p className="mt-4" style={{ color: 'var(--text)' }}>
            I am a detail-oriented and adaptable software engineer with a strong foundation in software development principles and 4 years of hands-on experience. I specialize in React, Node.js, MySQL and enjoy improving application performance and user experience.
          </p>
          <ul className="mt-4 space-y-2" style={{ color: 'var(--text)' }}>
            <li>• Strong problem-solving and debugging skills</li>
            <li>• Experience in end-to-end deployment and support</li>
            <li>• Comfortable with Git, AWS and modern web tooling</li>
          </ul>
        </div>
      </div>
    </section>
  )
}