//* Packages Imports */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@Assets": path.resolve(__dirname, "./src/assets"),
      "@Components": path.resolve(__dirname, "./src/components"),
      "@Context": path.resolve(__dirname, "./src/context"),
      "@Pages": path.resolve(__dirname, "./src/pages"),
      "@Src": path.resolve(__dirname, "./src"),
      "@Styles": path.resolve(__dirname, "./src/styles"),
      "@Utils": path.resolve(__dirname, "./src/utils"),
      "@Data": path.resolve(__dirname, "./src/data"),
    },
  },
  plugins: [react(), tsconfigPaths()],
});
