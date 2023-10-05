import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
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
