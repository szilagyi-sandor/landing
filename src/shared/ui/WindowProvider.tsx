import { PropsWithChildren, useLayoutEffect, useState } from "react";
import { WindowContext, WindowContextProvider } from "./WindowContext";

export function WindowProvider({ children }: PropsWithChildren) {
  const [windowState, setWindowState] = useState<WindowContext>({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  });

  useLayoutEffect(() => {
    const updateState = () => {
      setWindowState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    };

    updateState();
    window.addEventListener("resize", updateState);

    return () => {
      window.removeEventListener("resize", updateState);
    };
  }, []);

  return (
    <WindowContextProvider value={windowState}>
      {children}
    </WindowContextProvider>
  );
}

// CHECKED 1.0
