// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   base: "./",  // ye Netlify ke liye zaroori hai
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",   // deploy ke liye zaroori, nahi to assets missing dikh sakte hain
  
  build: {
    outDir: 'dist',   // default hai, Render/Netlify ke liye publish directory
  }
})
