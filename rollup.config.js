const typescript = require("rollup-plugin-typescript2");
const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const postcss = require("rollup-plugin-postcss");

module.exports = {
  input: "./src/index.tsx",
  output: [
    {
      file: "./dist/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "./dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    typescript(),
    postcss({
      extract: "index.css",
      minimize: true,
    }),
  ],
  external: ["react", "react-dom"],
};
