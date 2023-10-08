export type ErrorMessage = "400" | "401" | "403" | "404" | "500";

export type ErrorName =
  | "badRequest"
  | "unauthorized"
  | "forbidden"
  | "notFound"
  | "internalServerError";

export type ErrorContent = {
  title: string;
  message?: string;
  code: ErrorMessage;
};

// CHECKED 1.0
