import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./erros/error-page";
import routes from "./routes";
import Layout from "@/components/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: routes,
  },
]);

export default router;
