import { UserLoginCredentials, LoginResponse } from "@/types/User";

// --------------- EDNPOINTS ---------------
const LOGIN_ENDPOINT = import.meta.env.VITE_API_URL + "user/login";

interface LoginArgs {
  userLoginCredentials: UserLoginCredentials;
}

/**
 * Logs the user in and retreives the JWT token
 * @param userLoginCredentials user email and password
 * @param setLoading the loading state for the button
 * @returns either an error obj or the a success obj including the JWT token
 */
export const authenticate = async ({
  userLoginCredentials,
}: LoginArgs): Promise<LoginResponse> => {
  try {
    const response = await fetch(LOGIN_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userLoginCredentials),
    });

    if (!response.ok) {
      throw new Error("Invalid Credentials");
    }

    const jsonResponse = await response.json();

    return {
      ok: true,
      data: jsonResponse,
    };
  } catch (error) {
    const responseError: Error = error as Error;

    return {
      ok: false,
      data: responseError,
    };
  }
};
