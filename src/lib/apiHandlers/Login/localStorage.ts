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
