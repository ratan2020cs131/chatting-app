import js from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";

export default [
  {
    ...js.configs.recommended, // Use recommended configuration from @eslint/js
    languageOptions: {
      globals: globals.node, // Add Node.js global variables
    },
  },
  {
    plugins: {
      prettier: eslintPluginPrettier, // Add Prettier plugin
      "simple-import-sort": simpleImportSort, // Add Simple Import Sort plugin
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
