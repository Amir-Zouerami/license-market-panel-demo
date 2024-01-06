import type { NotificationInstance } from "antd/es/notification/interface";
import { extractRole } from "./extractRole";
import { assignRole } from "./assignRole";
import type { NavigateFunction } from "react-router-dom";
import { authenticate } from "@/lib/apiHandlers/Login/authenticate";
import { UserLoginCredentials } from "@/types/User";
import { setAuthInLocalStorage } from "./localStorage";

interface SubmitLoginProps {
  userLoginCredentials: UserLoginCredentials;
  api: NotificationInstance;
  navigate: NavigateFunction;
}

/**
 * Handles the login form on submit.
 * @param userLoginCredentials - user's email and password
 * @param setloading - manages the loading state of the form.
 * @param api - antd notification instance to send feedback to the user.
 * @param navigate - react-router-dom func to redirect user.
 * @returns void
 */
const submitlogin = async ({
  userLoginCredentials,
  api,
  navigate,
}: SubmitLoginProps) => {
  const res = await authenticate({
    userLoginCredentials,
  });

  if (!res.ok) {
    return api["error"]({
      message: "خطا!",
      description:
        "اطلاعات وارد شده صحیح نمی باشد. لطفا از صحت اطلاعات وارد شده اطمینان حاصل کنید.",
    });
  }

  const authToken = res.data.data.access_token;
  const role = extractRole(res.data.data.roles)!;
  const roleToken = await assignRole({ authToken, roleId: role.id });

  if (!roleToken.ok) {
    return api["error"]({
      message: "خطا!",
      description:
        "اطلاعات وارد شده صحیح نمی باشد. لطفا از صحت اطلاعات وارد شده اطمینان حاصل کنید.",
    });
  }

  setAuthInLocalStorage(
    userLoginCredentials.email,
    role.name,
    roleToken.data.data.access_token
  );
  return navigate("/", { replace: true });
};

export default submitlogin;
