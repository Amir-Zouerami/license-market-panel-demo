import UserProfileDropdown from "../UserProfileDropdown/UserProfileDropdown";
import NavLinkList from "@/components/Layout/Navbar/NavLinkList";
import styles from "../Layout.module.scss";
import { Menu, MenuProps } from "antd";
import { useState } from "react";

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

      <UserProfileDropdown />
    </div>
  );
};

export default Navbar;
