# aterm-web

Landing de **Agent Sessions / aterm** — Vite + Vue 3.

En producción: **[atermlabs.jesuslorenzo.es](https://atermlabs.jesuslorenzo.es)**
(el dominio lo fija `CNAME`).

## Desarrollo

```bash
npm install
npm run dev      # servidor local en http://localhost:5173
npm run build    # genera dist/
npm run preview  # sirve dist/ para comprobar el build
```

Desde el meta-repo: `make web` y `make web-build`.

## Editar contenido

Casi todo el contenido editable está en `src/site.js`:

- `LINKS` — GitHub, Open VSX, Marketplace, Releases (`.vsix` descargable) y los
  **checkout de Lemon Squeezy** (anual / mensual).
- `PRICING` — importes y notas de cada plan: 29 €/año y 3 €/mes, los reales de
  Lemon Squeezy. **Si los cambias allí, cámbialos aquí**: la web los muestra antes
  del checkout y una diferencia se lee como precio engañoso.
- `PROVIDERS` — los proveedores que se anuncian (7). Si añades uno al núcleo Rust,
  añádelo también aquí y en `agentSessions.scanProviders` de la extensión.

Secciones en `src/components/`: `NavBar`, `Hero`, `Features`, `Pricing`,
`Download`, `SiteFooter`.

> Al tocar el pitch, mantén la coherencia con los README de
> [`aterm`](https://github.com/Aterm-labs/aterm) y
> [`agent-sessions`](https://github.com/Aterm-labs/agent-sessions): son la otra
> cara del mismo mensaje y se desincronizan rápido.

## Desplegar

`npm run build` produce `dist/` estático. Súbelo a **Vercel / Netlify**
(framework: Vite) o a cualquier hosting estático; `base: "./"` ya está fijado en
`vite.config.js` para que funcione bajo cualquier ruta. Si despliegas en GitHub
Pages, el `CNAME` debe acabar en la raíz publicada.
