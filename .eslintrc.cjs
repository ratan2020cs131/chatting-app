module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "react-pro-sidebar", "vite.config.js"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: [
    "react-refresh",
    "unused-imports",
    "eslint-plugin-import",
    "@tanstack/query",
  ],
  settings: {
    react: { version: "18.2" },
    "import/resolver": {
      node: {
        moduleDirectory: ["src/", "node_modules"],
        // paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".d.ts", ".tsx"],
      },
    },
  },
  rules: {
    camelcase: "error",
    "react/jsx-no-target-blank": "off",
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }], // Show warning when using jsx in non jsx files
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: true,
        multiline: "ignore",
        ignoreCase: false,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ], // Sort component props
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "no-unused-vars": "error", // Disable variables that are declared and not used anywhere in the code rule
    "no-param-reassign": "error", // Show warning is function parameter are re-assigned
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: ["builtin", "external", "internal", "index"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "screens/",
            group: "internal",
            position: "before",
          },
          {
            pattern: "components/",
            group: "internal",
            position: "before",
          },
          {
            pattern: "custom-hooks/",
            group: "internal",
            position: "before",
          },
          {
            pattern: "constants/",
            group: "internal",
            position: "before",
          },
          {
            pattern: "routes/",
            group: "internal",
            position: "after",
          },
          {
            pattern: "utils/",
            group: "internal",
            position: "after",
          },
          {
            pattern: "assets/",
            group: "internal",
            position: "after",
          },
          {
            pattern: "styles/",
            group: "internal",
            position: "after",
          },
          {
            pattern: "theme/",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ], // Sort the eslint imports
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: true,
        multiline: "ignore",
        ignoreCase: false,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ], // Sort component props
    "no-restricted-syntax": [
      "error",
      "FunctionExpression[generator=false]:not(:has(ThisExpression))",
      "FunctionDeclaration[generator=false]:not(:has(ThisExpression))",
    ], // only support arrow functions and function expression/declarations having "this" keyword.
    "@tanstack/query/exhaustive-deps": "error",
    "@tanstack/query/no-rest-destructuring": "warn",
    "@tanstack/query/stable-query-client": "error",
  },
};