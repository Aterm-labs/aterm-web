<script setup>
import { LINKS } from "../site.js";
</script>

<template>
  <footer class="footer">
    <div class="container foot-inner">
      <div>
        <div class="brand"><span class="logo">▦</span> Agent Sessions</div>
        <p class="muted">
          El gestor de sesiones de agentes de código para VS Code. Parte del
          proyecto <a :href="LINKS.github" target="_blank" rel="noopener">aterm</a>.
        </p>
      </div>
      <nav class="cols">
        <div>
          <h4>Producto</h4>
          <a href="#features">Funciones</a>
          <a href="#pricing">Precios</a>
          <a :href="LINKS.openVsx" target="_blank" rel="noopener">Instalar</a>
        </div>
        <div>
          <h4>Proyecto</h4>
          <a :href="LINKS.github" target="_blank" rel="noopener">GitHub</a>
          <a :href="LINKS.github + '/blob/main/vscode-extension/README.md'" target="_blank" rel="noopener">Documentación</a>
        </div>
      </nav>
    </div>
    <div class="container copy">
      © {{ new Date().getFullYear() }} aterm · Hecho con Vue · Licencia MIT (Community)
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 48px 0 30px;
  background: var(--bg-soft);
}
.foot-inner {
  display: flex;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}
.brand {
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.logo {
  color: var(--brand);
}
.muted {
  color: var(--muted);
  max-width: 320px;
  font-size: 0.9rem;
}
.cols {
  display: flex;
  gap: 56px;
}
.cols h4 {
  margin: 0 0 10px;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
}
.cols a {
  display: block;
  color: var(--fg);
  font-size: 0.92rem;
  margin: 6px 0;
}
.cols a:hover {
  color: var(--brand);
}
.copy {
  margin-top: 32px;
  color: var(--muted);
  font-size: 0.82rem;
}
</style>
