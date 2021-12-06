import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { VitePWA } from 'vite-plugin-pwa';
import IstanbulPlugin from 'vite-plugin-istanbul';



export default defineConfig({
  plugins: [
    solidPlugin(),
    VitePWA({
      registerType: 'autoUpdate',
    }),
    IstanbulPlugin()
  ],
  assetsInclude: ['**/*.txt'],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
});
