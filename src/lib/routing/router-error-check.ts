import { isRouteErrorResponse } from "react-router-dom";

interface RouterError extends Error {}

function isRouterError(object: any): object is RouterError {
  return "message" in object;
}

export function getErrorMessage(error: unknown): string {
  if (isRouteErrorResponse(error)) {
    return `${error.status} ${error.statusText}`;
  } else if (error != undefined && isRouterError(error)) {
    return error.message;
  } else if (typeof error === "string") {
    return error;
  } else {
    console.error(error);
    return "Unknown error";
  }
}
