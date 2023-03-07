import { Link } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
const HeaderItems = [
  {
    key: 1,
    label: <Link to={"/shop"}>محصولات</Link>,
  },
  {
    key: 2,
    label: <Link to={"/add_product"}>افزودن محصول</Link>,
  },
  {
    key: 3,
    label: <Link to={"/cart"}></Link>,
    icon: <IoIosCart style={{ fontSize: "1.5rem", marginRight: "1rem" }} />,
    style: { position: "absolute", left: "0", textAlign: "center" },
  },
];

console.log(HeaderItems, "HeaderItems");
export default HeaderItems;
