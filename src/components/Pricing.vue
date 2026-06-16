<script setup>
import { LINKS, PRICING } from "../site.js";
</script>

<template>
  <section id="pricing" class="section pricing">
    <div class="container">
      <p class="eyebrow" style="text-align: center">Precios</p>
      <h2>Empieza gratis. Pasa a Pro cuando lo necesites.</h2>
      <p class="lead">14 días de prueba Pro, sin tarjeta. Cancela cuando quieras.</p>

      <div class="plans">
        <div class="plan">
          <h3>Community</h3>
          <div class="price">Gratis</div>
          <p class="muted">Para siempre · open source</p>
          <a class="btn btn-ghost full" :href="LINKS.openVsx" target="_blank" rel="noopener">
            Instalar
          </a>
          <ul>
            <li>Listar, buscar y reanudar sesiones</li>
            <li>Grupos, subproyectos e iconos</li>
            <li>Comandos de proyecto · MCP</li>
            <li>Multiselección y borrado por fecha</li>
          </ul>
        </div>

        <div class="plan featured">
          <span class="ribbon">Más popular</span>
          <h3>Pro · Anual</h3>
          <div class="price">{{ PRICING.annual.price }}<small>{{ PRICING.annual.period }}</small></div>
          <p class="muted">{{ PRICING.annual.note }}</p>
          <a class="btn btn-primary full" :href="LINKS.buyAnnual" target="_blank" rel="noopener">
            Comprar anual
          </a>
          <ul>
            <li>Todo lo de Community</li>
            <li>Comparativa paralela (worktrees)</li>
            <li>Plantillas y perfiles de workspace</li>
            <li>Dashboard Pro · export HTML/CSV</li>
            <li>Automatizaciones (idle, resumen diario)</li>
          </ul>
        </div>

        <div class="plan">
          <h3>Pro · Mensual</h3>
          <div class="price">{{ PRICING.monthly.price }}<small>{{ PRICING.monthly.period }}</small></div>
          <p class="muted">{{ PRICING.monthly.note }}</p>
          <a class="btn btn-ghost full" :href="LINKS.buyMonthly" target="_blank" rel="noopener">
            Comprar mensual
          </a>
          <ul>
            <li>Mismas funciones Pro</li>
            <li>Flexibilidad mes a mes</li>
            <li>Activación con tu license key</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing {
  background: linear-gradient(180deg, transparent, var(--bg-soft));
}
.plans {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 40px;
  align-items: start;
}
.plan {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 26px 22px;
  position: relative;
}
.plan.featured {
  border-color: color-mix(in srgb, var(--brand) 55%, var(--border));
  box-shadow: 0 24px 60px -34px color-mix(in srgb, var(--brand) 70%, transparent);
  transform: translateY(-6px);
}
.ribbon {
  position: absolute;
  top: -11px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--brand);
  color: #1a1206;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 3px 12px;
  border-radius: 999px;
}
h3 {
  font-size: 1.05rem;
}
.price {
  font-size: 2.2rem;
  font-weight: 820;
  margin: 8px 0 2px;
}
.price small {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--muted);
}
.muted {
  color: var(--muted);
  font-size: 0.85rem;
  margin: 0 0 16px;
}
.full {
  width: 100%;
  justify-content: center;
}
ul {
  list-style: none;
  margin: 18px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 9px;
}
li {
  position: relative;
  padding-left: 20px;
  font-size: 0.9rem;
  color: var(--muted);
}
li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--green);
  font-weight: 800;
}
@media (max-width: 820px) {
  .plans {
    grid-template-columns: 1fr;
  }
  .plan.featured {
    transform: none;
  }
}
</style>
