import { Menu } from "antd";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import type { MenuProps } from "antd";
import NavLinkList from "@/pages/Navbar/NavLinkList";
import styles from "./Layout.module.scss";

const Layout = () => {
  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = e => {
    setCurrent(e.key);
  };

  return (
    <div dir="rtl">
      <Menu
        className={styles.panelNavMenu}
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={NavLinkList}
      />

      <div className={styles.panelLayout}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
