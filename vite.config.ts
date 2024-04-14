//* Packages Imports */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@Assets": path.resolve(new URL("./src/assets", import.meta.url).pathname),
      "@Components": path.resolve(new URL("./src/components", import.meta.url).pathname),
      "@Context": path.resolve(new URL("./src/context", import.meta.url).pathname),
      "@Pages": path.resolve(new URL("./src/pages", import.meta.url).pathname),
      "@Src": path.resolve(new URL("./src", import.meta.url).pathname),
      "@Utils": path.resolve(new URL("./src/utils", import.meta.url).pathname),
      "@Data": path.resolve(new URL("./src/data", import.meta.url).pathname),
    },
  },
  plugins: [react(), tsconfigPaths()],
});
