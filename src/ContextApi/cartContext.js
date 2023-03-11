import { message } from "antd";
import { createContext, useEffect, useState } from "react";

const CartContext = createContext();
export default CartContext;
export const CartContextProvider = (props) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart"))?.length
      ? JSON.parse(localStorage.getItem("cart"))
      : []
  );
  const [reservedItems, setReservedItems] = useState([]);
  useEffect(() => {
    if (cart.length) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Update ReservedITems
  useEffect(() => {
    if (cart.length) {
      let reservedList = [];
      cart.map((item) => {
        reservedList.push(item.id);
      });
      setReservedItems(reservedList);
    }
  }, [cart]);

  useEffect(() => {
    console.log(cart, "cart");
    console.log(reservedItems, "reservedItems");
  });
  const addCart = (newCart) => {
    let productIndex = cart.findIndex((item) => item.id === newCart.id);
    console.log(productIndex, "productIndex");
    setTimeout(() => {
      if (productIndex !== -1) {
        message.warning("محصول در سبد خرید موجود است.");
      } else {
        setCart([...cart, newCart]);
      }
    }, 750);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addCart, clearCart, reservedItems }}>
      {props.children}
    </CartContext.Provider>
  );
};
