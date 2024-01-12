import React from "react";
import ReactDOM from "react-dom/client";
import { WindowProvider, setCssVariables } from "@shared/ui";
import { App } from "./App.tsx";
import { ErrorPageAtRoot } from "./pages";
import { ErrorBoundary } from "./shared/error";
import { AppsettingsProvider, getAppsettings } from "@shared/settings";

setCssVariables();

const startApp = async () => {
  const appsettings = await getAppsettings();

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <ErrorBoundary fallback={<ErrorPageAtRoot />}>
        <AppsettingsProvider value={appsettings}>
          <WindowProvider>
            <App />
          </WindowProvider>
        </AppsettingsProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
};

void startApp();

// CHECKED 1.0
