import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/trianglify.js'),
      name: 'trianglify',
      fileName: (format) => {
        switch (format) {
          case 'umd':
            return 'trianglify.bundle.js'
          case 'es':
            return 'trianglify.js'
          default:
            return `trianglify.${format}.js`
        }
      },
      formats: ['es', 'umd']
    },
    sourcemap: true,
    minify: false,
    rollupOptions: {
      external: (id) => {
        if (id === 'chroma-js' || id === 'delaunator' || id === 'canvas') {
          return false
        }
        return false
      },
      output: {
        globals: {
          'chroma-js': 'chroma',
          'delaunator': 'Delaunator',
          'canvas': 'Canvas'
        }
      }
    }
  }
});
