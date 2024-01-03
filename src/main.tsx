import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { ConfigProvider } from "antd";

import { RouterProvider } from "react-router-dom";
import router from "./lib/routing/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      direction="rtl"
      theme={{ token: { fontFamily: "IranSANS", fontSize: 16 } }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </React.StrictMode>
);
