import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { babel } from "@rollup/plugin-babel";

export default {
  input: "appSrc/main.js",
  output: {
    file: "dist/appBundle.js",
    format: "esm", // CommonJs
    sourcemap: true,
    // exports: "auto",
  },
  plugins: [
    commonjs({
      include: "node_modules/**",
    }),
    json(),
    nodeResolve({
      preferBuiltins: true,
    }),
    babel({
      babelHelpers: 'runtime',
      exclude: "node_modules/**", // 只编译我们的源代码
    }),
  ],
  // // 指出应将哪些模块视为外部模块(如：第三方库)
  // external: [],
};
