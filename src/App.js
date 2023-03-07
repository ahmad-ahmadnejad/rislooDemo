import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import AddProduct from "./Pages/addProduct";
import Cart from "./Pages/cart";
import Shop from "./Pages/shop";

const App = () => {
  return (
    <Routes>
      <Route index path="shop" element={<Shop />} />
      <Route index path="add_product" element={<AddProduct />} />
      <Route index path="cart" element={<Cart />} />
    </Routes>
  );
};

export default App;
