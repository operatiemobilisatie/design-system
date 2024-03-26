import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import preserveDirectives from 'rollup-plugin-preserve-directives';

// import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: ["src/index.ts"],
    output: [
      {
        dir: './dist',
        sourcemap: true,
        preserveModules: true,
      },
    ],
    plugins: [
      preserveDirectives({ exclude: ["**/*.scss"] }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "tsconfig.json" }),
      postcss({
        extract: "src/css/style.css"
      })
    ],
  },

  // Tailwind
  {
    input: "src/tailwindcss/index.ts",
    output: [{file: "dist/tailwindcss/index.js", format: "esm"}],
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
    ]
  },

  // Types
  {
    input: "dist/src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.scss$/]
  },
];