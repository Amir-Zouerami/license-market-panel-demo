import LoginForm from "@/components/Auth/LoginForm";
import tokenIsValid from "@/lib/JWT/tokenIsValid";
import Title from "antd/es/typography/Title";
import { Navigate } from "react-router-dom";
import styles from "./login.module.scss";

const Login = () => {
  const authed = tokenIsValid();
  if (authed) return <Navigate to={"/"} replace />;

  return (
    <div className={styles.loginContainer}>
      <Title>ورود به پنل کاربری</Title>
      <LoginForm />
    </div>
  );
};

export default Login;
