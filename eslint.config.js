import globals from "globals";
import standard from "eslint-config-standard";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

// 🔴 Plugins que Standard usa internamente
import importPlugin from "eslint-plugin-import";
import nPlugin from "eslint-plugin-n";
import promisePlugin from "eslint-plugin-promise";

export default [
  {
    ignores: ["dist"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      // 👇 REGISTRAR TODOS LOS PLUGINS
      "@typescript-eslint": tsPlugin,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin,
      n: nPlugin,
      promise: promisePlugin,
    },
    rules: {
      // 🔹 Standard rules
      ...standard.rules,

      // 🔹 TypeScript
      ...tsPlugin.configs.recommended.rules,

      // 🔹 React
      ...reactHooks.configs.recommended.rules,
      ...reactRefresh.configs.vite.rules,

      // 🔹 Estilo libre
      "comma-dangle": "off",
      quotes: "off",
      semi: "off",
      indent: "off",
      "space-before-function-paren": "off",

      // 🔹 Evitar duplicados JS vs TS
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { varsIgnorePattern: "^[A-Z_]" },
      ],
    },
  },
];
