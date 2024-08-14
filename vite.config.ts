import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ez-sequence/ez-sequence-site/",
  plugins: [react()],
})