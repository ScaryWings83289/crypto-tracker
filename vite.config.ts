//* Packages Imports */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@Assets": "./src/assets",
      "@Components": "./src/components",
      "@Context": "./src/context",
      "@Pages": "./src/pages",
      "@Src": "./src",
      "@Utils": "./src/utils",
      "@Data": "./src/data",
    },
  },
  plugins: [react(), tsconfigPaths()],
});
