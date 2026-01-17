import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: process.cwd() });

export default [
  ...compat.extends("next/core-web-vitals"), // Next.js recommended rules

  {
    files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2023,
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
      prettier: require("eslint-plugin-prettier"),
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          trailingComma: "all",
          semi: true,
          printWidth: 100,
          tabWidth: 2,
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "react/react-in-jsx-scope": "off",
    },
  },
];
