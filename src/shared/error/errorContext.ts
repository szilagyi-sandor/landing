import { createContext, useContext } from "react";

const errorContext = createContext<Error | undefined>(undefined);
const setErrorContext = createContext<(error: Error | undefined) => void>(
  () => {}
);

export const ErrorProvider = errorContext.Provider;
export const SetErrorProvider = setErrorContext.Provider;

export const useErrorContext = () => useContext(errorContext);
export const useSetErrorContext = () => useContext(setErrorContext);

// CHECKED 1.0
