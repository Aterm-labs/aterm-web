<script setup>
const free = [
  { t: "7 proveedores", d: "Claude Code, Codex, OpenCode, Gemini, Qwen Code, Goose y Factory Droid." },
  { t: "Listar · buscar · reanudar", d: "Todas tus sesiones de cada proveedor, con reanudar en un clic." },
  { t: "Vista previa elegante", d: "La conversación en burbujas, con metadatos y resaltado." },
  { t: "Metadata y organización", d: "Renombrar, etiquetas, color, notas, favoritos e iconos." },
  { t: "Grupos y subproyectos", d: "Agrupa por proveedor, proyecto, fecha o colecciones propias." },
  { t: "Estado, quota y slash-commands", d: "Badge de estado por proveedor (clic → su statuspage), uso 5h/7d sin plugins y los slash-commands del agente." },
];
const pro = [
  { t: "Gráfico de memoria", d: "Mapea la memoria del agente (global / proyecto / local) y créala o edítala con su ayuda, sin tocarla en silencio." },
  { t: "Scripts del proyecto", d: "npm / Make / just / Cargo agrupados por intérprete, con argumentos y parseo de --help." },
  { t: "Comparativa paralela", d: "El mismo prompt con varios agentes, cada uno en su git worktree." },
  { t: "Portar entre proveedores", d: "Lleva una sesión a otro agente o duplica el proyecto convertido a sus convenciones." },
  { t: "Servidor MCP", d: "Tu agente consulta su propio historial vía MCP, configurado con un clic." },
  { t: "Plantillas y perfiles", d: "Guarda proveedor + prompt + cwd, o conjuntos de sesiones, y relánzalos de golpe." },
  { t: "Dashboard Pro", d: "Informe visual con gráficas, filtros por fecha y export CSV." },
  { t: "Exportar a HTML y automatizaciones", d: "Comparte conversaciones con estilo; avisos de idle y resumen diario." },
];
</script>

<template>
  <section id="features" class="section">
    <div class="container">
      <p class="eyebrow" style="text-align: center">Open-core</p>
      <h2>Gratis lo esencial. Pro lo que te hace volar.</h2>
      <p class="lead">
        Casi todo es gratuito y de código abierto. Unas pocas funciones avanzadas
        forman la edición Pro.
      </p>

      <div class="cols">
        <div class="col">
          <div class="col-head">
            <span class="tag-free">Community · Gratis</span>
          </div>
          <ul>
            <li v-for="f in free" :key="f.t">
              <span class="check">✓</span>
              <div><strong>{{ f.t }}</strong><span>{{ f.d }}</span></div>
            </li>
          </ul>
        </div>

        <div class="col pro">
          <div class="col-head">
            <span class="tag-pro">Pro</span>
          </div>
          <ul>
            <li v-for="f in pro" :key="f.t">
              <span class="check pro-check">★</span>
              <div><strong>{{ f.t }}</strong><span>{{ f.d }}</span></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 40px;
}
.col {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 22px;
}
.col.pro {
  border-color: color-mix(in srgb, var(--brand) 45%, var(--border));
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--brand) 22%, transparent),
    0 24px 60px -34px color-mix(in srgb, var(--brand) 60%, transparent);
}
.col-head {
  margin-bottom: 14px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
li {
  display: flex;
  gap: 11px;
  align-items: flex-start;
}
.check {
  color: var(--green);
  font-weight: 800;
  margin-top: 2px;
}
.pro-check {
  color: var(--brand);
}
li strong {
  display: block;
}
li span {
  color: var(--muted);
  font-size: 0.9rem;
}
@media (max-width: 760px) {
  .cols {
    grid-template-columns: 1fr;
  }
}
</style>
