import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "app",
  base: "./",
  plugins: [react()],
  publicDir: "../public",
  build: {
    outDir: "../docs",
    emptyOutDir: true
  },
  server: {
    host: "127.0.0.1",
    port: 5173,
    strictPort: false
  }
});
