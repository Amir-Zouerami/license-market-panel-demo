import { isRouteErrorResponse } from "react-router-dom";

interface RouterError extends Error {}
interface FinalError {
  status: number;
  message: string;
}

function isRouterError(object: any): object is RouterError {
  return "message" in object;
}

export function getErrorMessage(error: unknown) {
  // TODO: CHECK
  const finalError: FinalError = {
    status: 500,
    message: "UNKNOWN",
  };

  if (isRouteErrorResponse(error)) {
    finalError.status = error.status;
    finalError.message = error.statusText;
  } else if (error != undefined && isRouterError(error)) {
    finalError.message = error.name;
  }

  return finalError;
}
