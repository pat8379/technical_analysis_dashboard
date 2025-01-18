import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@src": path.resolve(path.resolve(), "./src/"),
      "@components": `${path.resolve(path.resolve(), "./src/components/")}`,
      "@pages": `${path.resolve(path.resolve(), "./src/pages/")}`,
      "@services": `${path.resolve(path.resolve(), "./src/services/")}`,
      "@utils": `${path.resolve(path.resolve(), "./src/utils/")}`,
      "@config": `${path.resolve(path.resolve(), "./src/config/")}`,
      "@hooks": `${path.resolve(path.resolve(), "./src/hooks/")}`,
      "@queries": `${path.resolve(path.resolve(), "./src/queries/")}`,
      "@assets": `${path.resolve(path.resolve(), "./src/assets/")}`,
      "@mutations": `${path.resolve(path.resolve(), "./src/mutations/")}`,
      "@model": `${path.resolve(path.resolve(), "./src/model/")}`,
    },
  },
  preview: {
    port: 5173,
    strictPort: true,
  },
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:5173",
  },
});
