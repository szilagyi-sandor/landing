import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
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
