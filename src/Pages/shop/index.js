import { Col, Row } from "antd";
import CustomCard from "../../Components/Card/card";
import Products from "../../Data/Products/products";

const Shop = () => {
  return (
    <Row gutter={16}>
      {Products.map((item) => (
        <Col span={8}>
          <CustomCard
            key={item?.id}
            avatar={item?.avatar}
            title={item?.title}
            description={item?.description}
            cover={item?.cover}
          />
        </Col>
      ))}
    </Row>
  );
};

export default Shop;
