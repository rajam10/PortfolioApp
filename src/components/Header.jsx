import React, { useEffect, useState } from 'react'

export default function Header() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || null
    } catch (e) {
      return null
    }
  });
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const stored = theme
    if (stored) {
      if (stored === 'dark') root.classList.add('dark')
      else root.classList.remove('dark')
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      if (prefersDark) root.classList.add('dark')
      else root.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    try {
      const next = theme === 'dark' ? 'light' : 'dark'
      setTheme(next)
      localStorage.setItem('theme', next)
    } catch (e) {
      setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
    }
  }

  return (
  <header className="w-full sticky top-0 z-30 bg-white/80 dark:bg-black/40 backdrop-blur-md">
      <div className="max-w-4xl mx-auto py-4 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
            <h1 style={{padding: '8px 14px', background: '#602dff', color: 'white', fontWeight: 'bold', borderRadius: '10px'}}>R</h1>
          <div>
            <h1 className="text-violet-700 dark:text-violet-300 font-semibold">Rajabalan M</h1>
            <p className="text-xs text-gray-500 dark:text-muted">Software Engineer</p>
          </div>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setIsMobileNavOpen(true)}
            aria-label="Open navigation"
            className="px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200"
          >
            {/* simple hamburger icon */}
            <span style={{display:'block', width:18, height:2, background:'currentColor', marginBottom:3}}></span>
            <span style={{display:'block', width:18, height:2, background:'currentColor', marginBottom:3}}></span>
            <span style={{display:'block', width:18, height:2, background:'currentColor'}}></span>
          </button>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle theme"
            className="px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-700 dark:text-gray-200 items-center">
          <a href="#home" className="hover:text-violet-600 dark:hover:text-violet-200">Home</a>
          <a href="#about" className="hover:text-violet-600 dark:hover:text-violet-200">About</a>
          <a href="#skills" className="hover:text-violet-600 dark:hover:text-violet-200">Skills</a>
          <a href="#projects" className="hover:text-violet-600 dark:hover:text-violet-200">Work Experince</a>
          <a href="#contact" className="btn-outline px-4 py-2 rounded-md border border-violet-300 dark:border-violet-700 text-violet-700 dark:text-violet-200 hover:bg-violet-50 dark:hover:bg-transparent">Contact</a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle theme"
            className="ml-2 px-3 py-1 rounded bg-transparent border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setIsMobileNavOpen(false)}
        className={`${isMobileNavOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} fixed inset-0 bg-black/40 z-30 md:hidden transition-opacity`}
      />

      {/* Mobile drawer */}
      <aside
        className={`${isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 w-72 max-w-[85%] bg-white dark:bg-black z-40 shadow-xl md:hidden transition-transform`}
        role="dialog"
        aria-modal="true"
        style={{height:"100vh"}}
      >
        <div className="flex flex-col">
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <h1 style={{padding: '6px 10px', background: '#602dff', color: 'white', fontWeight: 'bold', borderRadius: '10px'}}>R</h1>
              <div>
                <h2 className="text-violet-700 dark:text-violet-300 font-semibold">Rajabalan M</h2>
                <p className="text-xs text-gray-500 dark:text-muted">Software Engineer</p>
              </div>
            </div>
            <button
              onClick={() => setIsMobileNavOpen(false)}
              aria-label="Close navigation"
              className="px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200"
            >
              ✕
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-4 py-4 text-gray-800 dark:text-gray-200">
            <ul className="space-y-2 text-sm">
              <li><a href="#home" onClick={() => setIsMobileNavOpen(false)} className="block px-3 py-2 rounded hover:bg-violet-50 dark:hover:bg-white/5">Home</a></li>
              <li><a href="#about" onClick={() => setIsMobileNavOpen(false)} className="block px-3 py-2 rounded hover:bg-violet-50 dark:hover:bg-white/5">About</a></li>
              <li><a href="#skills" onClick={() => setIsMobileNavOpen(false)} className="block px-3 py-2 rounded hover:bg-violet-50 dark:hover:bg-white/5">Skills</a></li>
              <li><a href="#projects" onClick={() => setIsMobileNavOpen(false)} className="block px-3 py-2 rounded hover:bg-violet-50 dark:hover:bg-white/5">Work Experince</a></li>
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setIsMobileNavOpen(false)}
                  className="block text-center px-4 py-2 rounded-md border border-violet-300 dark:border-violet-700 text-violet-700 dark:text-violet-200 hover:bg-violet-50 dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                title="Toggle theme"
                className="w-full px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200"
              >
                {theme === 'dark' ? 'Switch to Light ☀️' : 'Switch to Dark 🌙'}
              </button>
            </div>
          </nav>
        </div>
      </aside>
    </header>
  )
}