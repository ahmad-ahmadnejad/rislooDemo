import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegHospital } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiTwotoneExperiment } from "react-icons/ai";
const getItem = (label, key, icon, children) => {
  return {
    key,
    icon,
    children,
    label,
  };
};
const Sideritems = [
  getItem("داشبورد", "1", <AiOutlineDashboard />),
  getItem("مراکز درمانی", "sub1", <FaRegHospital />, [
    getItem("دفتر مشاوره دکتر انصاری", "3"),
    getItem("گروه تخصصی خدمات روانشناسی مهر", "4"),
    getItem("کلینیک تخصصی آمین", "5"),
  ]),
  getItem("جلسات", "2", <FiUsers />),
  getItem("نمونه ها", "sub2", <AiTwotoneExperiment />),
];

export default Sideritems;
