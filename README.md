# Sitio Web Clases de Ingles

Proyecto unificado en React + Vite, listo para deploy en Netlify.

## Requisitos

- Node.js 18 o superior (recomendado 20)
- npm 9 o superior

## Ejecutar en local

```bash
npm install
npm run dev
```

## Build de produccion

```bash
npm run build
```

La salida queda en `dist/`.

## Deploy en Netlify

Este repo ya incluye `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`

Si conectas el repo en Netlify, tomara esa configuracion automaticamente.
