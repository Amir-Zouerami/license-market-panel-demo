import { CaretDownOutlined } from "@ant-design/icons";
import LogoutButton from "./LogoutButton";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";

interface UserProfileDropdownProps {
  name: string;
}

const UserProfileDropdown = ({ name }: UserProfileDropdownProps) => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      danger: true,
      label: <LogoutButton />,
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomLeft">
      <span style={{ cursor: "pointer" }}>
        {name} <CaretDownOutlined style={{ verticalAlign: "middle" }} />
      </span>
    </Dropdown>
  );
};

export default UserProfileDropdown;
