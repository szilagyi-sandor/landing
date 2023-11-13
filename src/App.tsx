import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routing";
import "./assets/styles/defaults.scss";

export function App() {
  return (
    <div id="app">
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

// CHECKED 1.0
