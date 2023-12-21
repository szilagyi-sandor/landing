import { useContext, createContext } from "react";

export type WindowContext = {
  windowWidth: number;
  windowHeight: number;
};

const windowContext = createContext<WindowContext>({
  windowWidth: window.innerWidth,
  windowHeight: window.innerHeight,
});

export const WindowContextProvider = windowContext.Provider;

export const useWindowContext = () => useContext(windowContext);

// CHECKED 1.0
