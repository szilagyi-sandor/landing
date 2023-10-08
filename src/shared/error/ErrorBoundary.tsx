import { Component, ErrorInfo, PropsWithChildren, ReactNode } from "react";
import { ErrorProvider, SetErrorProvider } from "./errorContext";

type Props = {
  onUnmount?: () => void;
  fallback?: ReactNode | undefined;
  onCatch?: (error: Error, errorInfo: ErrorInfo) => void;
};

type State = {
  error?: Error;
};

export class ErrorBoundary extends Component<PropsWithChildren<Props>, State> {
  constructor(props: PropsWithChildren<Props>) {
    super(props);
    this.state = { error: undefined };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { onCatch } = this.props;

    if (onCatch) {
      onCatch(error, errorInfo);
    }
  }

  componentWillUnmount(): void {
    const { onUnmount } = this.props;

    if (onUnmount) {
      onUnmount();
    }
  }

  render() {
    const { error } = this.state;
    const { children, fallback } = this.props;

    if (error) {
      if (fallback === undefined) {
        return null;
      }

      return (
        <ErrorProvider value={error}>
          <SetErrorProvider value={this.setError}>{fallback}</SetErrorProvider>
        </ErrorProvider>
      );
    }

    return children;
  }

  setError = (error?: Error | undefined) => {
    this.setState({ error });
  };
}

// CHECKED 1.0
