import Root from "@/pages/root/Root";
import Orders from "@/pages/Orders/Orders";
import Products from "@/pages/Products/Products";
import Operators from "@/pages/Operators/Operators";
import Roles from "@/pages/Roles/Roles";

const routes = [
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "orders",
    element: <Orders />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "operators",
    element: <Operators />,
  },
  {
    path: "roles",
    element: <Roles />,
  },
];

export default routes;
