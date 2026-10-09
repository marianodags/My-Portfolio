import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
  build: { rollupOptions: { input: { home: resolve(process.cwd(), "index.html"), projects: resolve(process.cwd(), "projects.html"), services: resolve(process.cwd(), "services.html"), about: resolve(process.cwd(), "about.html"), contact: resolve(process.cwd(), "contact.html") } } },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
  },
});
