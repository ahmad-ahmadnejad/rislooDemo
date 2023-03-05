import { Layout, Menu } from "antd";
import HeaderItems from "../../Constants/Header/HeaderItems";
const Header = () => {
  const { Header: AntdHeader } = Layout;
  return (
    <AntdHeader style={{ background: "white" }} className="header ">
      <div className="logo" />
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={HeaderItems}
      />
    </AntdHeader>
  );
};

export default Header;
