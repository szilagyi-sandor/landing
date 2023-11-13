import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { ErrorPageAtRoot } from "./pages";
import { ErrorBoundary } from "./shared/error";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorPageAtRoot />}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// CHECKED 1.0
