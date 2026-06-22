<script setup>
import { LINKS } from "../site.js";
</script>

<template>
  <header class="nav">
    <div class="container nav-inner">
      <a class="brand" href="#top">
        <span class="logo">▦</span> Agent Sessions
      </a>
      <nav class="links">
        <a href="#features">Funciones</a>
        <a href="#download">Descargar</a>
        <a href="#pricing">Precios</a>
        <a :href="LINKS.github" target="_blank" rel="noopener">GitHub</a>
        <a class="btn btn-ghost" :href="LINKS.marketplace" target="_blank" rel="noopener">
          Instalar
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(10px);
  background: color-mix(in srgb, var(--bg) 78%, transparent);
  border-bottom: 1px solid var(--border);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}
.brand {
  font-weight: 800;
  letter-spacing: -0.01em;
  display: inline-flex;
  align-items: center;
  gap: 9px;
}
.logo {
  color: var(--brand);
  font-size: 1.2em;
}
.links {
  display: flex;
  align-items: center;
  gap: 22px;
  font-size: 0.93rem;
  color: var(--muted);
}
.links a:hover {
  color: var(--fg);
}
.links .btn {
  color: var(--fg);
}
@media (max-width: 640px) {
  .links a:not(.btn) {
    display: none;
  }
}
</style>
