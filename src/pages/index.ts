import { lazy } from "react";

export { default as Layout } from "./_Layout";
export { default as ErrorPageAtRoot } from "./ErrorPageAtRoot";

export const LazyCvPage = lazy(() => import("./CvPage"));
export const LazyHomePage = lazy(() => import("./HomePage"));
export const LazyBlogPage = lazy(() => import("./BlogPage"));
export const LazyErrorPage = lazy(() => import("./ErrorPage"));
export const LazyContactPage = lazy(() => import("./ContactPage"));
export const LazySandboxPage = lazy(() => import("./SandboxPage"));
export const LazyReferencesPage = lazy(() => import("./ReferencesPage"));
export const LazyTechnologiesPage = lazy(() => import("./TechnologiesPage"));

// CHECKED 1.0
