import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

// import packageJson from "./package.json" assert { type: "json" };

export default [

  // Server Components
  {
    input: ["src/components/server/index.ts"],
    output: [
      {
        file: './dist/server/index.js',
        format: "cjs",
        sourcemap: true,
      },
      {
        file: './dist/server/index.js',
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "tsconfig.json" }),
      postcss({
        extract: false,
        inject: false
      })
    ],
  },

  // Client Components
  {
    input: ["src/components/client/index.ts"],
    output: [
      {
        file: './dist/client/index.js',
        format: "cjs",
        sourcemap: true,
        banner: "'use client';"
      },
      {
        file: './dist/client/index.js',
        format: "esm",
        sourcemap: true,
        banner: "'use client';"
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "tsconfig.json" }),
      postcss({
        extract: false,
        inject: false
      })
    ],
  },

  // Styling
  {
    input: "src/index.ts",
    output: [{file: "dist/index.js", format: "esm"}],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "tsconfig.json" }),
      postcss({
        extract: "css/style.css"
      })
    ]
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
  // {
  //   input: "dist/types/index.d.ts",
  //   output: [{ file: "dist/index.d.ts", format: "esm" }],
  //   plugins: [dts()],
  //   external: [/\.scss$/]
  // },
];