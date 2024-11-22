import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Desserts from "./components/Desserts";
import OrderCompleted from "./components/OrderCompleted";

interface CartItems {
  name: string;
  price: number;
  category: string;
  quantity: number;
  totalPrice: number;
}

const App = () => {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);
  const [orderCompleted, setOrderCompleted] = useState<boolean>(false);

  const addToCart = (item: CartItems) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.name === item.name
      );
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
          totalPrice: updatedItems[existingItemIndex].totalPrice + item.price,
        };
        return updatedItems;
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <>
      <div className="container">
        {orderCompleted === false ? (
          <>
            <div className="desert_section">
              <h1>Desserts</h1>
              <Desserts
                addToCart={addToCart}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            </div>
            <div className="order_section">
              <Cart
                cartItems={cartItems}
                setCartItems={setCartItems}
                setOrderCompleted={setOrderCompleted}
              />
            </div>
          </>
        ) : (
          <>
            <h1>Desserts</h1>
            <OrderCompleted
              setOrderCompleted={setOrderCompleted}
              setCartItems={setCartItems}
            />
          </>
        )}
      </div>
    </>
  );
};

export default App;
