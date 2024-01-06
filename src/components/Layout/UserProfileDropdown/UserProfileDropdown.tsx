import { CaretDownOutlined } from "@ant-design/icons";
import LogoutButton from "./LogoutButton";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";

const UserProfileDropdown = () => {
  const email = localStorage.getItem("email");
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <span>{email}</span>,
      style: { cursor: "default" },
    },
    {
      type: "divider",
    },
    {
      key: "3",
      danger: true,
      label: <LogoutButton />,
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomLeft">
      <span style={{ cursor: "pointer" }}>
        <span>حساب</span>{" "}
        <CaretDownOutlined style={{ verticalAlign: "middle" }} />
      </span>
    </Dropdown>
  );
};

export default UserProfileDropdown;
