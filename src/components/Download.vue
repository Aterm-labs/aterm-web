<script setup>
import { ref } from "vue";
import { LINKS } from "../site.js";

const sources = [
  {
    id: "vscode",
    label: "VS Code",
    store: "Visual Studio Marketplace",
    url: LINKS.marketplace,
    note: "Para VS Code. Instalación y actualizaciones automáticas.",
  },
  {
    id: "openvsx",
    label: "Cursor · Windsurf · VSCodium",
    store: "Open VSX",
    url: LINKS.openVsx,
    note: "Para editores basados en VS Code que usan el registro Open VSX.",
  },
  {
    id: "vsix",
    label: ".vsix manual",
    store: "GitHub Releases",
    url: LINKS.releases,
    note: "Descarga el .vsix de tu plataforma e instálalo desde «Install from VSIX…» o por terminal:",
  },
];
const sel = ref(sources[0]);
</script>

<template>
  <section id="download" class="section download">
    <div class="container">
      <h2>Descarga la extensión</h2>
      <p class="lead">Elige de dónde instalarla según tu editor.</p>

      <div class="seg" role="tablist" aria-label="Origen de descarga">
        <button
          v-for="s in sources"
          :key="s.id"
          :class="['seg-btn', { active: sel.id === s.id }]"
          role="tab"
          :aria-selected="sel.id === s.id"
          @click="sel = s"
        >
          {{ s.label }}
        </button>
      </div>

      <div class="panel">
        <p class="store">{{ sel.store }}</p>
        <p class="note">{{ sel.note }}</p>
        <pre v-if="sel.id === 'vsix'" class="cmd">code --install-extension agent-sessions-*.vsix</pre>
        <a class="btn btn-primary" :href="sel.url" target="_blank" rel="noopener">
          {{ sel.id === "vsix" ? "Ver releases (.vsix)" : "Instalar desde " + sel.store }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.download .lead {
  margin-bottom: 22px;
}
.seg {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 4px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--bg-soft);
}
.seg-btn {
  font: inherit;
  font-size: 0.92rem;
  padding: 8px 14px;
  border: 0;
  border-radius: 9px;
  cursor: pointer;
  color: var(--muted);
  background: transparent;
  transition: background 0.15s ease, color 0.15s ease;
}
.seg-btn:hover {
  color: var(--fg);
}
.seg-btn.active {
  color: #fff;
  background: color-mix(in srgb, var(--brand) 80%, #000);
}
.panel {
  margin-top: 18px;
  padding: 20px 22px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--card);
  max-width: 640px;
}
.panel .store {
  font-weight: 700;
  margin: 0 0 4px;
}
.panel .note {
  color: var(--muted);
  margin: 0 0 14px;
}
.panel .cmd {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.85rem;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 10px 12px;
  overflow-x: auto;
  margin: 0 0 14px;
}
</style>
