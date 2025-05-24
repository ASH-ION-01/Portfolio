import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'three': 'three',
      'three/webgpu': 'three',
      'three/tsl': 'three'
    }
  },
  optimizeDeps: {
    include: ['three']
  }
})
