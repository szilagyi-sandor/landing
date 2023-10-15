import { useLayoutEffect, useRef } from "react";

type Props = {
  errorMessage: string;
};

export function ErrorThrower({ errorMessage }: Props): JSX.Element {
  const isThrownRef = useRef(false);

  useLayoutEffect(() => {
    if (!isThrownRef.current) {
      isThrownRef.current = true;
      throw new Error(errorMessage);
    }
  }, [errorMessage]);

  return <></>;
}

// CHECKED 1.0
