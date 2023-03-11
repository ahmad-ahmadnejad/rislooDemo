import { Badge } from "antd";
import { useContext } from "react";
import { IoIosCart } from "react-icons/io";
import CartContext from "../../ContextApi/cartContext.js";

const CustomBadge = () => {
  const { reservedItems } = useContext(CartContext);
  console.log(reservedItems, "reservedItems");
  return (
    <Badge count={reservedItems.length}>
      <IoIosCart style={{ fontSize: "1.5rem", marginRight: "1rem" }} />
    </Badge>
  );
};

export default CustomBadge;
