import { PropsWithChildren, Suspense, useState } from "react";
import classNames from "classnames";
import { ScrollRestoration, useLocation } from "react-router-dom";
import { ErrorBoundary } from "@shared/error";
import { LoadingIndicator } from "@shared/ui";
import { LazyErrorPage } from ".";
import { LayoutNavigation } from "./_LayoutNavigation";
import classes from "./_Layout.module.scss";
import navigationClasses from "./_LayoutNavigation.module.scss";

export default function Layout({ children }: PropsWithChildren) {
  const { pathname } = useLocation();
  const [paddingBottom, setPaddingBottom] = useState(0);

  return (
    <section
      className={classNames(classes.layout, navigationClasses.layout)}
      style={{ paddingBottom }}
    >
      <header>
        <LayoutNavigation
          layoutPaddingBottom={paddingBottom}
          setLayoutPaddingBottom={setPaddingBottom}
        />
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
