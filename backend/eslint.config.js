import js from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";

export default [
  {
    ...js.configs.recommended,
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    plugins: {
      prettier: eslintPluginPrettier,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      camelcase: ["error", { properties: "always" }],
      "prettier/prettier": "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^@?\\w"], // Third-party packages
            ["^@/(.*)$"], // Absolute imports
            ["^[./]"], // Relative imports
          ],
        },
      ],
      "no-console": "error",
    },
  },
];
