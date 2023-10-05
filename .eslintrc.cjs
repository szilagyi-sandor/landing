module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "plugins/ssm-eslint",
    "plugins/ssm-stylelint",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
    extraFileExtensions: [".scss"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react-refresh", "ssm-eslint"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-non-null-assertion": 0,
    "ssm-eslint/required-checked-comment": 2,
  },
};
