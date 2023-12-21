import React from "react";
import ReactDOM from "react-dom/client";
import { WindowProvider, setCssVariables } from "@shared/ui";
import { App } from "./App.tsx";
import { ErrorPageAtRoot } from "./pages";
import { ErrorBoundary } from "./shared/error";

setCssVariables();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorPageAtRoot />}>
      <WindowProvider>
        <App />
      </WindowProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

// CHECKED 1.0
