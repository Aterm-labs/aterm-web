import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Base "./" so the build works under any path (GitHub Pages project sites,
// Vercel, Netlify, plain static host).
export default defineConfig({
  base: "./",
  plugins: [vue()],
});
