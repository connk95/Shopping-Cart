import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vitest/config";

export default defineConfig({
  base: "/Shopping-Cart/",
  plugins: [
    svgr({
      svgrOptions: {
        ref: true,
      },
    }),
    react(),
  ],
  server: {
    port: 3000,
    host: true,
  },
  build: {
    outDir: "./build",
  },
  test: {
    include: ["**/*.test.jsx"],
    globals: true,
    environment: "happy-dom",
    setupFiles: "./setupTest.js",
  },
});
