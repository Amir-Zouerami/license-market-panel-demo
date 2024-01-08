import { RoleName } from "@/types/User";

/**
 * sets the essential user data in localstorage
 * @param email
 * @param roleName
 * @param token
 */
export const setAuthInLocalStorage = (
  email: string,
  roleName: string,
  token: string
) => {
  localStorage.setItem("email", email);
  localStorage.setItem("role", roleName);
  localStorage.setItem("token", token);
};

export const getRoleName = (): RoleName => {
  const storedRole = localStorage.getItem("role") ?? "user";

  if (
    storedRole === "super admin" ||
    storedRole === "admin" ||
    storedRole === "user"
  ) {
    return storedRole;
  }

  return "user";
};
