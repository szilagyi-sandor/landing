import { ErrorContent } from "./domain";
import { errorContents } from "./constants";

export const getErrorText = (
  errorMessage?: string,
  fallbackContent?: ErrorContent
): ErrorContent => {
  if (errorMessage) {
    const errorContent = (
      errorContents as Record<string, ErrorContent | undefined>
    )[errorMessage];

    if (errorContent) {
      return errorContent;
    }
  }

  return fallbackContent ?? errorContents.internalServerError;
};

// CHECKED 1.0
