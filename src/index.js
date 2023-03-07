import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider, theme } from "antd";
import "./index.css";
import App from "./App";
import "./tailwind.css";
import "./Style/font.css";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ConfigProvider
      direction="rtl"
      theme={{
        algorithm: theme.defaultAlgorithm,
      }}
    >
      <MainLayout>
        <App />
      </MainLayout>
    </ConfigProvider>
  </BrowserRouter>
);
