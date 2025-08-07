import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Use a importação correta
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Esta configuração já está correta e agora vai funcionar em conjunto com o tsconfig
      "@": path.resolve(new URL(import.meta.url).pathname, "../src"),
    },
  },
});
