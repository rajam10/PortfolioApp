import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { registerSW } from 'virtual:pwa-register'
import './index.css'

registerSW({ immediate: true }) 

createRoot(document.getElementById('root')).render(
    <App />
)