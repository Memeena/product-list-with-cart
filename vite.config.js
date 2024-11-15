import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  // server: {
  //   proxy: {
  //     "/api/products": {
  //       // This path prefix will trigger the proxy
  //       target: "https://memeena.github.io",
  //       changeOrigin: true, // Important: Needed for proper domain handling
  //       rewrite: (path) =>
  //         path.replace(/^\/api\/products/, "/product-list-json"), // Adjust path if needed
  //     },
  //   },
  // },
});
