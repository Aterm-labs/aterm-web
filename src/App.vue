<script setup>
import NavBar from "./components/NavBar.vue";
import Hero from "./components/Hero.vue";
import Features from "./components/Features.vue";
import Download from "./components/Download.vue";
import Pricing from "./components/Pricing.vue";
import SiteFooter from "./components/SiteFooter.vue";
</script>

<template>
  <NavBar />
  <main>
    <Hero />
    <Features />
    <Download />
    <Pricing />
  </main>
  <SiteFooter />
</template>
