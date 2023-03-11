import { Input, message, Modal, Table, Upload } from "antd";
import { useEffect, useState } from "react";
import Avatar from "../../Components/Avatar/avatar";
import Button from "../../Components/Button/button";
import Products from "../../Data/Products/products";
import ImgCrop from "antd-img-crop";
const AddProduct = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [productData, setProductData] = useState({
    title: null,
    description: null,
  });
  const [loading, setLoading] = useState(false);
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

  useEffect(() => {
    console.log(productData, "productData");
  });

  const addProductHandler = () => {
    if (productData.title && productData.description) {
      setLoading(true);
      setTimeout(() => {
        let x = Math.floor(Math.random() * 10); // Random Response! || Fake Response
        if (x > 5) {
          message.success("محصول با موفقیت ثبت شد.");
          setLoading(false);
          setModalIsOpen(false);
        } else {
          message.success("متاسفیم! خطای 404 سرور یافت شد.");
          setLoading(false);
          setModalIsOpen(false);
        }
      }, 2000);
    } else {
      message.error("لطفا عنوان و توضیحات را وارد کنید ..");
    }
  };
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
      <Modal
        title="افزودن محصول"
        footer={null}
        open={modalIsOpen}
        onCancel={() => setModalIsOpen(false)}
      >
        <div className="flex flex-col justify-center items-center gap-4">
          <div>
            <Input
              onChange={(e) =>
                setProductData({
                  ...productData,
                  title: e.target.value,
                })
              }
              placeholder="عنوان محصول..."
            />
          </div>
          <div>
            <Input
              onChange={(e) =>
                setProductData({
                  ...productData,
                  description: e.target.value,
                })
              }
              placeholder="توضیحات محصول..."
            />
          </div>
          <div
            style={{
              background: "#dfe6e9",
              padding: "5px 25px",
              borderRadius: "5px",
            }}
          >
            <ImgCrop>
              <Upload style={{ background: "gray" }}>تصویری اضافه کنید</Upload>
            </ImgCrop>
          </div>
          <div>
            <Button
              style={{ background: "#27ae60", marginLeft: "5px" }}
              loading={loading}
              onClick={addProductHandler}
            >
              ثبت محصول
            </Button>
            <Button
              style={{ background: "#27ae60", marginRight: "5px" }}
              onClick={() => setModalIsOpen(false)}
            >
              لغو
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddProduct;
