import { defineConfig } from "vite";
import * as path from 'path'
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*"],
      },
 
      includeAssets: ["**/*"],
      manifest: {
        theme_color: "#232e58",
        background_color: "#232e58",
        display: "standalone",
        scope: "/",
        start_url: "/",
        short_name: "Todo App",
        description: "Todo App",
        name: "Todo App",
        icons: [
          {
            src: "logo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "logo256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "logo384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "logo512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      styles: `${path.resolve(__dirname, "./src/styles")}`,
      pages: path.resolve(__dirname, "./src/pages"),
      hooks: `${path.resolve(__dirname, "./src/hooks")}`,
      layout: `${path.resolve(__dirname, "./src/components/layout/")}`,
    },
  },
});
