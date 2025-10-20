import React, { useEffect, useState } from 'react'

export default function Header() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || null
    } catch (e) {
      return null
    }
  });

  useEffect(() => {
    // Initialize theme on mount
    const root = document.documentElement
    const stored = theme
    if (stored) {
      if (stored === 'dark') root.classList.add('dark')
      else root.classList.remove('dark')
    } else {
      // follow system preference when not set
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
      // ignore storage errors
      setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
    }
  }

  return (
  <header className="w-full sticky top-0 z-30 bg-white/80 dark:bg-black/40 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
            <h1 style={{padding: '8px 14px', background: '#602dff', color: 'white', fontWeight: 'bold', borderRadius: '10px'}}>R</h1>
          <div>
            <h1 className="text-violet-700 dark:text-violet-300 font-semibold">Rajabalan M</h1>
            <p className="text-xs text-gray-500 dark:text-muted">Fullstack Engineer</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-gray-700 dark:text-gray-200 items-center">
          <a href="#home" className="hover:text-violet-600 dark:hover:text-violet-200">Home</a>
          <a href="#about" className="hover:text-violet-600 dark:hover:text-violet-200">About</a>
          <a href="#skills" className="hover:text-violet-600 dark:hover:text-violet-200">Skills</a>
          <a href="#projects" className="hover:text-violet-600 dark:hover:text-violet-200">Projects</a>
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
    </header>
  )
}