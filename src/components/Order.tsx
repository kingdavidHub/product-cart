import IconRemove from "../assets/images/icon-remove-item.svg";

import '../order.css';
type Order = {
  name: string;
  price: number;
  category: string;
};

const Order = ({ name, price, category }: Order) => {
  return (
    <>
      <div className="order">
        <div className="order-details">
          <h5>Classic Tiramisu</h5>
          <div className="order-total">
            <span>1x</span>
            <span>@ $5.50</span>
            <span>$5.50</span>
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
