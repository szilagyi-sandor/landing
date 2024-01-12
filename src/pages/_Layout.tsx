import { PropsWithChildren, Suspense } from "react";
import classNames from "classnames";
import { ScrollRestoration, useLocation } from "react-router-dom";
import { ErrorBoundary } from "@shared/error";
import { LoadingIndicator } from "@shared/ui";
import { LazyErrorPage } from ".";
import { LayoutNavigation } from "./_LayoutNavigation";
import "@assets/styles/fonts.scss";
import classes from "./_layout.module.scss";
import navigationClasses from "./_layoutNavigation.module.scss";

export default function Layout({ children }: PropsWithChildren) {
  const { pathname } = useLocation();

  return (
    <section className={classNames(classes.layout, navigationClasses.layout)}>
      <header>
        <LayoutNavigation />
      </header>

      <main>
        <Suspense fallback={<LoadingIndicator />}>
          <ErrorBoundary key={pathname} fallback={<LazyErrorPage />}>
            {children}
          </ErrorBoundary>
        </Suspense>
      </main>

      <footer>
        <div>© {new Date().getFullYear()} SSM</div>
      </footer>

      <ScrollRestoration />
    </section>
  );
}

// CHECKED 1.0
