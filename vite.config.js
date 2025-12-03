import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const repo = 'KyaooApps8'
const isProjectPage = process.env.GH_PROJECT === 'true'

export default defineConfig({
  plugins: [react()],
  base: isProjectPage ? `/${repo}/` : '/',
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    emptyOutDir: false
  }
})
