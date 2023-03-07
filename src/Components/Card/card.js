import { Card as AntdCard } from "antd";
import Avatar from "../Avatar/avatar";
import Button from "../Button/button";
const CustomCard = ({ avatar, title, description, cover }) => {
  const { Meta } = AntdCard;
  return (
    <AntdCard
      className="w-74 mb-2"
      cover={<img alt="دکتر/ریسلو" src={cover} />}
      actions={[
        <Button
          style={{ background: "#009432", color: "white" }}
          className="w-full h-full p-2 bg-green-500  "
        >
          رزرو نوبت
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
