import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    "schemas/index": "src/schemas/index.ts",
  },
  dts: true,
  format: ["cjs", "esm"],
  splitting: false,
  clean: true,
  sourcemap: false,
  treeshake: true,
  minify: false,
  outDir: "dist",
  tsconfig: "./tsconfig.json",
  outExtension({ format }) {
    return { js: format === "cjs" ? ".cjs" : ".mjs" };
  },
});
