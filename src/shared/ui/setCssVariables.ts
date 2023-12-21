import { getScrollbarWidth } from "./getScrollbarWidth";

export const setCssVariables = () => {
  document.documentElement.style.setProperty(
    "--scrollbarWidth",
    `${getScrollbarWidth()}px`
  );
};

// CHECKED 1.0
