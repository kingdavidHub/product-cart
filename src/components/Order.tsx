import IconRemove from "../assets/images/icon-remove-item.svg";

import '../order.css';
type Order = {
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
};

const Order = ({ name, price, quantity, totalPrice }: Order) => {
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
          <button className="order-close-button">
            <img src={IconRemove} alt="Remove order " />
          </button>
        </div>
      </div>
    </>
  );
};

export default Order;
