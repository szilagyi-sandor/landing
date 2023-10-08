import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    checker({
      typescript: true,
      overlay: {
        initialIsOpen: false,
      },
      eslint: {
        lintCommand:
          "eslint --cache --cache-location ./node_modules/.cache/eslint src",
      },
      stylelint: {
        lintCommand: 'stylelint "**/*.scss"',
      },
    }),
  ],
});

// CHECKED 1.0
