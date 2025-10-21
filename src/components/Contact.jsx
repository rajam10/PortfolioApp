import React from 'react'

export default function Contact() {
  const linkedin_url = import.meta.env.VITE_LINKEDIN_URL;
  const github_url = import.meta.env.VITE_GITHUB_URL;
  return (
    <section id="contact" className="py-12">
      <div className="container">
        <h3 className="text-2xl font-semibold text-violet-700">Contact me</h3>

        <div className="mt-6">
          <div className="card-surface">
            <div className="contact-links">
              <a className="contact-link" href="mailto:rajabalan6300@gmail.com">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                <span className="ml-2">rajabalan6300@gmail.com</span>
              </a>

              <a className="contact-link" href="tel:+917868812415">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1v3.61a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.61a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.01l-2.31 2.22z"/></svg>
                <span className="ml-2">+91 7868812415</span>
              </a>

              <a className="contact-link" href={github_url} target="_blank" rel="noreferrer noopener">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.93 3.18 9.11 7.59 10.58.55.1.75-.24.75-.53 0-.26-.01-1.08-.02-1.96-3.09.67-3.74-1.49-3.74-1.49-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.56 1.19 3.18.91.1-.72.38-1.19.69-1.46-2.47-.28-5.07-1.24-5.07-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.4.11-2.93 0 0 .94-.3 3.08 1.15a10.7 10.7 0 012.8-.38c.95 0 1.9.13 2.79.38 2.13-1.45 3.07-1.15 3.07-1.15.62 1.53.24 2.65.12 2.93.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.24-5.09 5.52.39.34.74 1.01.74 2.04 0 1.47-.01 2.66-.01 3.02 0 .29.2.64.76.53 4.41-1.48 7.58-5.66 7.58-10.59C23.25 5.48 18.27.5 12 .5z"/></svg>
                <span className="ml-2">GitHub</span>
              </a>

              <a className="contact-link" href={linkedin_url} target="_blank" rel="noreferrer noopener">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.99h5V24H0V8.99zM8.5 8.99h4.79v2.03h.07c.67-1.27 2.3-2.61 4.73-2.61 5.06 0 6 3.33 6 7.66V24h-5V16.6c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92V24h-5V8.99z"/></svg>
                <span className="ml-2">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}