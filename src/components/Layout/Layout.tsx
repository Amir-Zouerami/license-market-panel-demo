import { Navigate, Outlet } from "react-router-dom";
import tokenIsValid from "@/lib/JWT/tokenIsValid";
import styles from "./Layout.module.scss";
import Navbar from "./Navbar/Navbar";

const Layout = () => {
  const authed = tokenIsValid();
  if (!authed) return <Navigate to={"/login"} replace />;

  return (
    <div dir="rtl">
      <Navbar />

      <div className={styles.panelLayout}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
