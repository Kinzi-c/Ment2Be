import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// @Ratchet7x5 integrate a server.js file using the guide below
//Read this for backend integration
// https://vitejs.dev/guide/backend-integration.html

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   // generate manifest.json in outDir
  //   manifest: true,
  //   rollupOptions: {
  //     // overwrite default .html entry
  //     input: '',
  //   },
  // },
  // server: {
  //   //origin: 'http://127.0.0.1:3000',
  //   proxy: {
  //     // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
  //     '/api': 'http://localhost:3000',
  //   },
  // },
})
