# aterm-web

Landing de **Agent Sessions / aterm** — Vite + Vue 3.

## Desarrollo

```bash
npm install
npm run dev      # servidor local en http://localhost:5173
npm run build    # genera dist/
npm run preview  # sirve dist/ para comprobar el build
```

## Editar contenido

Casi todo el contenido editable está en `src/site.js`:

- `LINKS` — GitHub, Open VSX, Marketplace y los **checkout de Lemon Squeezy**
  (anual / mensual).
- `PRICING` — importes y notas de cada plan (**ajústalos al precio real** de tus
  productos en Lemon Squeezy).
- `PROVIDERS` — proveedores mostrados.

Secciones en `src/components/`: `NavBar`, `Hero`, `Features`, `Pricing`,
`SiteFooter`.

## Desplegar

`npm run build` produce `dist/` estático. Súbelo a **Vercel / Netlify**
(framework: Vite) o a cualquier hosting estático. `base: "./"` ya está fijado en
`vite.config.js` para que funcione bajo cualquier ruta.
