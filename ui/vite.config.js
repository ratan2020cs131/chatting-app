import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    https: false,
    fs: {
      cachedChecks: false,
    },
  },
  resolve: {
    alias: {
      assets: "/src/assets",
      components: "/src/components",
      constants: "/src/constants",
      hooks: "/src/hooks",
      routes: "/src/routes",
      screen: "/src/screens",
      services: "/src/services",
      storage: "/src/storage",
      utils: "/src/utils",
    },
  },
  preview: {
    port: 3001,
    strictPort: true,
  },
});
