import UserProfileDropdown from "../UserProfileDropdown/UserProfileDropdown";
import NavLinkList from "@/components/Layout/Navbar/NavLinkList";
import { useLocation } from "react-router-dom";
import styles from "../Layout.module.scss";
import { Menu, MenuProps } from "antd";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const activePage = location.pathname.substring(1) || "home";
  const [current, setCurrent] = useState(activePage);

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
