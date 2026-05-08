import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // For GitHub Pages you may later want to set base: "/<repo>/"
  // We keep it "/" for local dev and custom domains.
  server: {
    host: "127.0.0.1",
    port: 5173,
    strictPort: false
  }
});
