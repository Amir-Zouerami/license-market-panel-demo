import {
  LoginResponseSuccess,
  UserLoginCredentials,
  LoginResponseFail,
} from "@/types/User";

// --------------- GENERAL DATA ---------------
const LOGIN_ENDPOINT = import.meta.env.VITE_API_URL + "user/login";
const FETCH_POST_OPTIONS = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
} as RequestInit;

// --------------- LOGIN FORM SUBMIT ---------------

interface LoginArgs {
  userLoginCredentials: UserLoginCredentials;
  setloading: (isLoading: boolean) => void;
}

/**
 * Logs the user in and retreives the JWT token
 * @param userLoginCredentials user email and password
 * @param setLoading the loading state for the button
 * @returns either an error obj or the a success obj including the JWT token
 */
export const login = async ({
  userLoginCredentials,
  setloading,
}: LoginArgs) => {
  setloading(true);

  return fetch(LOGIN_ENDPOINT, {
    ...FETCH_POST_OPTIONS,
    body: JSON.stringify(userLoginCredentials),
  })
    .then(async rawData => {
      if (!rawData.ok) {
        throw new Error("Invalid Credentials");
      }

      const jsonResponse: LoginResponseSuccess = await rawData.json();
      setloading(false);

      return {
        ok: true,
        data: jsonResponse,
      } as const;
    })
    .catch(err => {
      setloading(false);
      return {
        ok: false,
        data: err as LoginResponseFail,
      } as const;
    });

  //   setloading(true);
  //   try {
  //     const rawResponse = await fetch(LOGIN_ENDPOINT, {
  //       ...FETCH_POST_OPTIONS,
  //       body: JSON.stringify(userLoginCredentials),
  //     });
  //     const jsonResponse: LoginResponseSuccess = await rawResponse.json();

  //     console.log("INSIDE: ", jsonResponse);

  //     setloading(false);
  //     return {
  //       ok: true,
  //       data: jsonResponse,
  //     };
  //   } catch (error) {
  //     setloading(false);
  //     console.log("ERORR: ", error);

  //     return {
  //       ok: false,
  //       data: error as LoginResponseFail,
  //     };
  //   }
};
