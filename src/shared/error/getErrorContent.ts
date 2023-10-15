import { ErrorContent } from "./domain";
import { errorContents } from "./constants";

export const getErrorText = (
  errorMessage?: string,
  fallbackContent?: ErrorContent
): ErrorContent => {
  if (errorMessage) {
    const errorKeys = Object.keys(
      errorContents
    ) as (keyof typeof errorContents)[];

    const errorKey = errorKeys.find((key) => {
      const errorContent = errorContents[key];

      return errorContent.code === errorMessage;
    });

    if (errorKey) {
      return errorContents[errorKey];
    }
  }

  return fallbackContent ?? errorContents.internalServerError;
};

// CHECKED 1.0
