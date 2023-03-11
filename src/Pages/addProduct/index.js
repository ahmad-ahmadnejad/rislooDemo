import { Modal, Table } from "antd";
import { useState } from "react";
import Avatar from "../../Components/Avatar/avatar";
import Button from "../../Components/Button/button";
import Products from "../../Data/Products/products";

const AddProduct = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const productsColumn = [
    {
      title: "شماره محصول",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "عنوان محصول",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "توضیحات محصول",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "آواتار فروشنده",
      dataIndex: "avatar",
      key: "avatar",
      render: (src) => <Avatar src={src} />,
    },
    {
      title: "کاور محصول",
      dataIndex: "cover",
      key: "cover",
      render: (src) => <img alt="risloo" width={50} src={src} />,
    },
  ];
  return (
    <>
      <Button
        onClick={() => setModalIsOpen(true)}
        style={{ background: "#2980b9", marginBottom: "10px" }}
      >
        افزودن محصول
      </Button>
      <Table
        columns={productsColumn}
        dataSource={Products.map((item) => {
          return { ...item };
        })}
      />
      <Modal open={modalIsOpen} />
    </>
  );
};

export default AddProduct;
