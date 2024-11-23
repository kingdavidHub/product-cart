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
  thumbnail: string;
  image: {
    desktop: string;
    tablet: string;
    mobile: string;
    thumbnail: string;
  };
  
}

const App = () => {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

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
            handleOpen={handleOpen}
          />
        </div>
        <OrderCompleted
          setCartItems={setCartItems}
          isOpen={open}
          onClose={handleClose}
        />
      </div>
    </>
  );
};

export default App;
