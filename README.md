# Portfolio App

This is a React + Vite portfolio site.

## Make PWA

To enable the PWA features I added the `vite-plugin-pwa` dependency. Install it locally:

```powershell
npm install --save-dev vite-plugin-pwa
```

Then run the dev server or build:

```powershell
npm run dev
npm run build
```

The PWA plugin will generate a service worker and include the manifest/icons from `public/icons/`. The app will register a service worker automatically (autoUpdate mode).