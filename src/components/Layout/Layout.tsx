import { Menu } from "antd";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import type { MenuProps } from "antd";
import NavLinkList from "@/components/Layout/NavLinkList";
import styles from "./Layout.module.scss";
import Authorize from "@/lib/routing/Auth/Authorize";

const Layout = () => {
  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = e => {
    setCurrent(e.key);
  };

  return (
    <div dir="rtl">
      <Authorize>
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
      </Authorize>
    </div>
  );
};

export default Layout;
