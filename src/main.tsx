import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./lib/routing/router";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import React from "react";
import "./index.scss";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        direction="rtl"
        theme={{
          components: { Form: { itemMarginBottom: 35, labelFontSize: 14 } },
          token: { fontFamily: "IranSANS", fontSize: 16 },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
