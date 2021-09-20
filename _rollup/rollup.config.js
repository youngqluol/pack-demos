import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs', // CommonJs
    sourcemap: true,
    exports: 'auto',
  },
  plugins: [
    commonjs({
      include: 'node_modules/**',
    }),
    json(),
    nodeResolve({
      preferBuiltins: true,
    }),
  ],
  // 指出应将哪些模块视为外部模块(如：第三方库)
  external: []
}