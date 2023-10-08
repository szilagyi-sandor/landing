import { ErrorContent, ErrorMessage, ErrorName } from "./domain";

export const errorMessages: Record<ErrorName, ErrorMessage> = {
  badRequest: "400",
  unauthorized: "401",
  forbidden: "403",
  notFound: "404",
  internalServerError: "500",
};

export const errorContents: Record<ErrorName, ErrorContent> = {
  badRequest: {
    code: "400",
    title: "Bad request",
    message:
      "The server cannot or will not process the request due to an apparent client error.",
  },
  unauthorized: {
    code: "401",
    title: "Unauthorized",
    message: "Access is denied due to invalid credentials",
  },
  forbidden: {
    code: "403",
    title: "Forbidden",
    message: "You don't have permission to access this page.",
  },
  notFound: {
    code: "404",
    title: "Not found",
    message:
      "What you are looking for might have been removed, had its name changed or is temporally unavailable.",
  },
  internalServerError: {
    code: "500",
    title: "Error",
    message: "Sorry, something went wrong. Our team is working on it.",
  },
};

// CHECKED 1.0
