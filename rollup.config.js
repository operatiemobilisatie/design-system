import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: ["src/index.ts"],
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      postcss({
        extract: 'css/style.css'
      }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "tsconfig.json" })
    ],
  },
  {
    input: "src/tailwindcss/index.ts",
    output: [{file: "dist/tailwindcss/index.js", format: "esm"}],
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
    ]
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.scss$/]
  },
];