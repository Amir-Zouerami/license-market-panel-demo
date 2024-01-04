import { useState } from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import NavLinkList from "@/components/Layout/NavLinkList";
import styles from "./Layout.module.scss";

const Navbar = () => {
  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = e => {
    setCurrent(e.key);
  };

  return (
    <Menu
      className={styles.panelNavMenu}
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={NavLinkList}
    />
  );
};

export default Navbar;
