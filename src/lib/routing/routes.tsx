import Login from "@/pages/Auth/Login";
import App from "@/App";
import Orders from "@/pages/Orders/Orders";
import Products from "@/pages/Products/Products";
import Operators from "@/pages/Operators/Operators";
import Roles from "@/pages/Roles/Roles";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <Login />,
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
