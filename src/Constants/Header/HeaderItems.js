import { Link } from "react-router-dom";

import CustomBadge from "./customBadge";

export default () => {
  return [
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
      icon: <CustomBadge />,
      style: { position: "absolute", left: "0", textAlign: "center" },
    },
  ];
};
