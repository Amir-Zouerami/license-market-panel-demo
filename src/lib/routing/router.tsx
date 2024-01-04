import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./erros/error-page";
import routes from "./routes";
import Layout from "@/components/Layout/Layout";
import Login from "@/pages/Auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: routes,
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
