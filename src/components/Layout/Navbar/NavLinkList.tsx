import { Link } from "react-router-dom";
import type { MenuProps } from "antd";
import {
  CarOutlined,
  DollarOutlined,
  HomeOutlined,
  SecurityScanOutlined,
  UserOutlined,
} from "@ant-design/icons";

const NavLinkList: MenuProps["items"] = [
  {
    label: <Link to="/">صفحه اصلی</Link>,
    icon: <HomeOutlined />,
    key: "home",
  },
  {
    label: <Link to="/orders">سفارشات</Link>,
    icon: <DollarOutlined />,
    key: "orders",
  },
  {
    label: <Link to="/products">محصولات</Link>,
    icon: <CarOutlined />,
    key: "products",
  },
  {
    label: <Link to="/operators">اپراتور ها</Link>,
    icon: <UserOutlined />,
    key: "operators",
  },
  {
    label: <Link to="/roles">نقش ها</Link>,
    icon: <SecurityScanOutlined />,
    key: "roles",
  },
];

export default NavLinkList;
