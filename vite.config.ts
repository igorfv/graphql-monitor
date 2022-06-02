import { resolve } from "path";
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { crx, defineManifest } from "@crxjs/vite-plugin";
import pkg from "./package.json";


const manifest = defineManifest({
  manifest_version: 3,
  name: "Apollo Tracing",
  "description": "An extension to help you visualize Apollo graphql tracing data",
  version: pkg.version,
  icons: {
    16: "assets/icon-16.png",
    48: "assets/icon-48.png",
    128: "assets/icon-128.png",
  },
  devtools_page: "devtools/index.html",
});

export default defineConfig({
  plugins: [solidPlugin(), crx({ manifest })],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    rollupOptions: {
      input: {
        panel: resolve(__dirname, "devtools/panel.html"),
      },
    },
  },
  optimizeDeps: {
    entries: ["**/*.html"],
  },
});
