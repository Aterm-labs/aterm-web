<script setup>
import { LINKS, PROVIDERS } from "../site.js";

const rows = [
  { i: "C", c: "#e0883b", t: "Refactor del panel de sesiones", m: "claude · aterm · ctx 32%" },
  { i: "X", c: "#6bd089", t: "Tests del parser de rollouts", m: "codex · backend · hace 2 h" },
  { i: "Q", c: "#2ac3de", t: "Migración del esquema", m: "qwen · api · hace 5 h" },
  { i: "O", c: "#6aa6ff", t: "Migración a wgpu", m: "opencode · render · ayer" },
  { i: "G", c: "#e0af68", t: "Limpieza de dependencias", m: "goose · infra · ayer" },
  { i: "D", c: "#f7768e", t: "Esquema de la API pública", m: "droid · docs · hace 3 d" },
];
</script>

<template>
  <section id="top" class="hero">
    <div class="container">
      <p class="eyebrow">Claude Code · Codex · OpenCode · Gemini · Qwen · Goose · Droid</p>
      <h1>
        Tus sesiones de agentes,<br />
        <span class="accent">ordenadas y a un clic</span>
      </h1>
      <p class="sub">
        Lista, previsualiza y <strong>reanuda</strong> cualquier conversación de tus
        agentes de código sin salir de VS Code. Grupos, búsqueda en el contenido,
        comandos de proyecto y mucho más.
      </p>
      <div class="cta">
        <a class="btn btn-primary" :href="LINKS.openVsx" target="_blank" rel="noopener">
          Instalar gratis
        </a>
        <a class="btn btn-ghost" href="#pricing">Ver Pro</a>
      </div>
      <p class="micro">Gratis lo esencial · Pro con 14 días de prueba · open-core</p>

      <div class="providers">
        <span v-for="p in PROVIDERS" :key="p" class="chip">{{ p }}</span>
      </div>

      <div class="mock">
        <div class="mock-bar">
          <span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>
          <span class="mock-title">Agent Sessions — VS Code</span>
        </div>
        <div class="mock-body">
          <div class="row" v-for="r in rows" :key="r.t">
            <span class="avatar" :style="{ background: r.c }">{{ r.i }}</span>
            <span class="t">{{ r.t }}</span>
            <span class="m">{{ r.m }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 84px 0 56px;
  text-align: center;
}
h1 {
  font-size: clamp(2.1rem, 6vw, 3.6rem);
  font-weight: 820;
  letter-spacing: -0.02em;
  margin-top: 14px;
}
.accent {
  background: linear-gradient(90deg, var(--brand), var(--brand-2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.sub {
  max-width: 620px;
  margin: 18px auto 0;
  color: var(--muted);
  font-size: 1.08rem;
}
.cta {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 28px;
}
.micro {
  color: var(--muted);
  font-size: 0.83rem;
  margin-top: 12px;
}
.providers {
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 26px;
}
.chip {
  font-size: 0.8rem;
  color: var(--muted);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 4px 12px;
  background: var(--bg-soft);
}
.mock {
  max-width: 720px;
  margin: 48px auto 0;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--card);
  overflow: hidden;
  box-shadow: 0 30px 80px -30px rgba(0, 0, 0, 0.8);
  text-align: left;
}
.mock-bar {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 10px 14px;
  border-bottom: 1px solid var(--border);
  background: var(--bg-soft);
}
.dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}
.dot.r {
  background: #ec6a5e;
}
.dot.y {
  background: #f4bf4f;
}
.dot.g {
  background: #61c554;
}
.mock-title {
  margin-left: 8px;
  color: var(--muted);
  font-size: 0.8rem;
}
.mock-body {
  padding: 10px;
}
.row {
  display: grid;
  grid-template-columns: 30px 1fr auto;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 9px;
}
.row:hover {
  background: var(--bg-soft);
}
.avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.8rem;
  color: #10131a;
}
.row .t {
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.row .m {
  color: var(--muted);
  font-size: 0.82rem;
  white-space: nowrap;
}
@media (max-width: 640px) {
  .row .m {
    display: none;
  }
}
</style>
