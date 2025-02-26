import js from "@eslint/js";
import ts from "typescript-eslint";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  { files: ["**/*.{ts}"] },
  js.configs.recommended,
  ...ts.configs.recommended,
  prettier,
  {
    plugins: { prettier: prettierPlugin },
    rules: { "prettier/prettier": "error" },
  },
];
