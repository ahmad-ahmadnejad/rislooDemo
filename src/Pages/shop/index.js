import { Col, Row } from "antd";
import { useContext, useEffect } from "react";
import CustomCard from "../../Components/Card/card";
import CartContext from "../../ContextApi/cartContext";
import Products from "../../Data/Products/products";

const Shop = () => {
  const { addCart, reservedItems } = useContext(CartContext);

  return (
    <Row gutter={16}>
      {Products.map((item) => (
        <Col span={8}>
          <CustomCard
            key={item?.id}
            id={item?.id}
            avatar={item?.avatar}
            title={item?.title}
            description={item?.description}
            cover={item?.cover}
            addToCartHandler={() => addCart(item)}
            reservedItems={reservedItems}
          />
        </Col>
      ))}
    </Row>
  );
};

export default Shop;
