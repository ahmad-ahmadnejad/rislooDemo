import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider, theme } from "antd";
import "./index.css";
import App from "./App";
import "./Style/font.css";
import "./Style/ovverrides.css";
import "./tailwind.css";

import { BrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import { CartContextProvider } from "./ContextApi/cartContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartContextProvider>
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
  </CartContextProvider>
);
