import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="pt-12 pb-24">
      <div className="container text-center">
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center gap-6">
          <div>
            <h2 className="heading-lg md:text-[3rem] leading-tight">Hi, I'm Rajabalan</h2>
            <h4 className="mt-4 heading-lg md:text-[2rem] leading-tight">Software Engineer</h4>
            <p className="mt-4 subtle max-w-2xl mx-auto">Take a look around, and feel free to reach out if you’d like to collaborate!</p>
            <a href="../assets/Rajabalan_M_Resume.pdf" target='_blank' className="mt-5 btn btn-primary">Download CV</a>

          </div>
          <div className="avatar">
            <img src="../assets/Rajabalan.jpg" alt="Rajabalan profile" />
          </div>
        </div>
        <div className="mt-8 hero-cta justify-center">
          <a href="#projects" className="btn btn-primary">View Work Experience</a>
          <a href="#contact" className="btn btn-ghost">Get in touch</a>
        </div>
      </div>
    </section>
  )
}