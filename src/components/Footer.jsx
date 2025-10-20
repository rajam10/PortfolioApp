import React from 'react'

export default function Footer() {
  return (
    <footer className="py-6 border-t mt-12">
      <div className="max-w-4xl mx-auto px-6 text-center text-sm text-gray-600">© {new Date().getFullYear()} Rajabalan M — Built with React + Vite</div>
    </footer>
  )
}