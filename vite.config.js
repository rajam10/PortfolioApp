import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
let pwaPlugin = null
try {
  const { VitePWA } = require('vite-plugin-pwa')
  pwaPlugin = VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'robots.txt', 'icons/*'],
    manifest: {
      name: 'Rajabalan M Portfolio',
      short_name: 'Rajabalan',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#6f32ff',
        icons: [
        { src: '/icons/icon-192.svg', sizes: '192x192', type: 'image/svg+xml' },
        { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icons/icon-512.svg', sizes: '512x512', type: 'image/svg+xml' },
        { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
        { src: '/icons/icon-192-maskable.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
        { src: '/icons/icon-512-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        { src: '/icons/apple-touch-icon.svg', sizes: '180x180', type: 'image/svg+xml' },
        { src: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
      ]
    }
  })
} catch (err) {
}

const plugins = [react()]
if (pwaPlugin) plugins.push(pwaPlugin)

export default defineConfig({ plugins })