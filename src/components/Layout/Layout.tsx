import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import styles from "./Layout.module.scss";

const Layout = () => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to={"/login"} replace />;

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
