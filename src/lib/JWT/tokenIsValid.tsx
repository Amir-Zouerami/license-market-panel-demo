import { TokenPayload } from "@/types/JWT";

/**
 * checks two things:
 * - There is a JWT token in localstorage.
 * - The token is NOT expired.
 *
 * No API calls, just a loose check.
 * @returns true if the token is valid, false otherwise
 */
const tokenIsValid = () => {
  const jwt = localStorage.getItem("token");
  if (!jwt) {
    localStorage.clear();
    return false;
  }

  try {
    const payload: TokenPayload = JSON.parse(atob(jwt.split(".")[1]));
    const expInMilliseconds = payload.exp * 1000;

    if (Date.now() > expInMilliseconds) {
      localStorage.clear();
      return false;
    }

    return true;
  } catch (error) {
    localStorage.clear();
    return false;
  }
};

export default tokenIsValid;
