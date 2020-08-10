import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'index.js',
  output: {
    format: 'es',
    file: 'index.esm.js'
  },
  plugins: [commonjs()],
};