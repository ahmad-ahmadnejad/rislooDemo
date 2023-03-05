import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider, theme } from "antd";
import "./index.css";
import App from "./App";
import "./tailwind.css";
import "./Style/font.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider
    direction="rtl"
    theme={{
      algorithm: theme.defaultAlgorithm,
    }}
  >
    <App />
  </ConfigProvider>
);
