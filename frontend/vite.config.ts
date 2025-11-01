import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    build: {
      rollupOptions: {
          output: {
              manualChunks: {
                  // vendor libraries split
                  'react-vendor': ['react', 'react-dom', 'react-router-dom'],
                  'mui-core': ['@mui/material', '@mui/system', '@emotion/react', '@emotion/styled'],
                  'mui-icons': ['@mui/icons-material'],
                  'markdown': ['react-markdown'],
              },
          },
      },
        chunkSizeWarningLimit: 600,
    }
})
