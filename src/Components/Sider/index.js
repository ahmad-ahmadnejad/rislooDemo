import { useState } from "react";
import { Menu, Layout } from "antd";
import Sideritems from "../../Constants/Sider/SiderItems";
const Sider = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { Sider: AntdSider } = Layout;
  return (
    <AntdSider
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div
        style={{
          height: 32,
          margin: 16,
          background: "rgba(255, 255, 255, 0.2)",
        }}
      />
      <h1
        className={`text-primary font-bold text-center mb-8 transition-all ${
          collapsed ? "text-lg" : "text-2xl"
        }`}
      >
        ریسلو
      </h1>
      <Menu defaultSelectedKeys={["1"]} mode="inline" items={Sideritems} />
    </AntdSider>
  );
};

export default Sider;
