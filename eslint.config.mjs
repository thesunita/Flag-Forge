import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["**/dist/**", "**/node_modules/**", "**/.yarn/**", "**/coverage/**", "**/*.d.ts"],
  },

  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ["**/*.ts", "**/*.tsx"],

    languageOptions: {
      parser: tseslint.parser,

      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },

      globals: {
        ...globals.node,
      },
    },

    rules: {
      "no-console": "warn",
      "no-debugger": "error",
    },
  },
];
