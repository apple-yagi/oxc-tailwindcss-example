import tsParser from "@typescript-eslint/parser";
import betterTailwindcss from "eslint-plugin-better-tailwindcss";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "better-tailwindcss": betterTailwindcss,
    },
    rules: {
      "better-tailwindcss/enforce-consistent-line-wrapping": "error",
      "better-tailwindcss/enforce-consistent-class-order": "error",
      "better-tailwindcss/enforce-consistent-variable-syntax": "error",
      "better-tailwindcss/enforce-consistent-important-position": "error",
      "better-tailwindcss/enforce-shorthand-classes": "error",
      "better-tailwindcss/enforce-canonical-classes": "error",
      "better-tailwindcss/no-duplicate-classes": "warn",
      "better-tailwindcss/no-deprecated-classes": "error",
      "better-tailwindcss/no-unnecessary-whitespace": "warn",
      "better-tailwindcss/no-unknown-classes": "error",
      "better-tailwindcss/no-conflicting-classes": "error",
      "better-tailwindcss/no-restricted-classes": "error",
    },
    settings: {
      "better-tailwindcss": {
        entryPoint: "src/index.css",
      },
    },
  },
];
