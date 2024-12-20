import IconRemove from "../assets/images/icon-remove-item.svg";

import "../order.css";

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

type Order = {
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
  thumbnail: string;
  image: {
    desktop: string;
    tablet: string;
    mobile: string;
    thumbnail: string;
  };
  setCartItems: React.Dispatch<React.SetStateAction<CartItems[]>>;
};

const Order = ({ name, price, quantity, totalPrice, setCartItems }: Order) => {
  const removeOrder = (name: string) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.name !== name);
      return updatedItems;
    });
  };
  return (
    <>
      <div className="order">
        <div className="order-details">
          <h5>{name}</h5>
          <div className="order-total">
            <span>{quantity}x</span>
            <span>@ {price}</span>
            <span>${totalPrice}</span>
          </div>
        </div>
        <div className="order-close">
          <button className="icon-reset" onClick={() => removeOrder(name)}>
            <img src={IconRemove} alt="Remove order " />
          </button>
        </div>
      </div>
    </>
  );
};

export default Order;
