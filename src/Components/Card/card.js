import { Card as AntdCard } from "antd";
import { useEffect, useState } from "react";
import Avatar from "../Avatar/avatar";
import Button from "../Button/button";
const CustomCard = ({
  avatar,
  title,
  description,
  cover,
  addToCartHandler,
  reservedItems,
  id,
}) => {
  const { Meta } = AntdCard;
  const [loading, setLoading] = useState(false);

  // Fake API Call !
  const reservationHandler = () => {
    setLoading(true); // fake loading
    setTimeout(() => {
      setLoading(false);
      addToCartHandler();
    }, 700);
  };

  //Debug
  useEffect(() => {
    console.log(reservedItems, "reservedItems");
    console.log(id, "key");
  });
  return (
    <AntdCard
      className="w-74 mb-2"
      cover={<img alt="دکتر/ریسلو" src={cover} />}
      actions={[
        <Button
          disabled={reservedItems.includes(id)}
          onClick={reservationHandler}
          style={{
            background: `${reservedItems.includes(id) ? "gray" : "#009432"}`,
            color: "white",
          }}
          className="w-full h-full p-2 bg-green-500  "
          loading={loading}
        >
          {reservedItems.includes(id) ? "انتخاب شده است." : "رزرو نوبت"}
        </Button>,
      ]}
    >
      <Meta
        avatar={<Avatar src={avatar} />}
        title={title}
        description={description}
      />
    </AntdCard>
  );
};
export default CustomCard;
