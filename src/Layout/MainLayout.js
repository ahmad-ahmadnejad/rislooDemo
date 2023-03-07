import { Layout } from "antd";
import Header from "../Components/Header";
import Sider from "../Components/Sider";
const MainLayout = ({ children }) => {
  const { Content } = Layout;
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider />

      <Layout className="site-layout">
        <Header />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            className="rounded-lg mt-8 p-6 bg-backContent"
            style={{
              minHeight: 360,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
