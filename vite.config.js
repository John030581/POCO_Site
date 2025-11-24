import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vikeReact from 'vike-react/config'
import basicSsl from '@vitejs/plugin-basic-ssl';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl(), nodePolyfills()],
  ssr: false,
  server: {
    /*here*/
    hmr: { overlay: false }
  },
  extends: [vikeReact]
})
