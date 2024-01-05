import UserProfileDropdown from "../UserProfileDropdown/UserProfileDropdown";
import NavLinkList from "@/components/Layout/Navbar/NavLinkList";
import styles from "../Layout.module.scss";
import type { MenuProps } from "antd";
import { useState } from "react";
import { Menu } from "antd";

const Navbar = () => {
  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = e => {
    setCurrent(e.key);
  };

  return (
    <div className={styles.navBarFlex}>
      <Menu
        className={styles.panelNavMenu}
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={NavLinkList}
      />

      {/* TODO: pass name dynamically - from the API */}
      <UserProfileDropdown name="امیر" />
    </div>
  );
};

export default Navbar;
