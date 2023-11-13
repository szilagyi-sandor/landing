import { PropsWithChildren, Suspense } from "react";
import { ScrollRestoration, useLocation } from "react-router-dom";
import { ErrorBoundary } from "@shared/error";
import { LoadingIndicator } from "@shared/ui";
import { LazyErrorPage } from ".";
import { LayoutNavigation } from "./_LayoutNavigation";

export default function Layout({ children }: PropsWithChildren) {
  const { pathname } = useLocation();

  return (
    <section>
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
