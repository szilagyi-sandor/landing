import { Outlet, createBrowserRouter } from "react-router-dom";
import { routes } from "@shared/constants";
import { ErrorThrower, ErrorBoundary, errorMessages } from "@shared/error";
import {
  Layout,
  ErrorPageAtRoot,
  LazyCvPage,
  LazyHomePage,
  LazyBlogPage,
  LazySandboxPage,
  LazyContactPage,
  LazyReferencesPage,
  LazyTechnologiesPage,
} from "@pages";

export const router = createBrowserRouter([
  {
    path: routes.home,
    element: (
      <ErrorBoundary fallback={<ErrorPageAtRoot />}>
        <Layout>
          <Outlet />
        </Layout>
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: <LazyHomePage />,
      },
      {
        path: routes.cv,
        element: <LazyCvPage />,
      },
      {
        path: routes.blog,
        element: <LazyBlogPage />,
      },
      {
        path: routes.sandbox,
        element: <LazySandboxPage />,
      },
      {
        path: routes.contact,
        element: <LazyContactPage />,
      },
      {
        path: routes.references,
        element: <LazyReferencesPage />,
      },
      {
        path: routes.technologies,
        element: <LazyTechnologiesPage />,
      },
      {
        path: "*",
        element: <ErrorThrower errorMessage={errorMessages.notFound} />,
      },
    ],
  },
]);

// CHECKED 1.0
