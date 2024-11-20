import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Desserts from "./components/Desserts";

interface CartItems {
  name: string;
  price: number;
  category: string;
}

const App = () => {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);

  const addToCart = (item: CartItems) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <>
      <div className="container">
        <div className="desert_section">
          <h1>Desserts</h1>
          <Desserts addToCart={addToCart} />
        </div>
        <div className="order_section">
          <Cart cartItems={cartItems} />
        </div>
      </div>
    </>
  );
};

export default App;
