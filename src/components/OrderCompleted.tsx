import "../styles/OrderCompleted.css";
import OrderCompletedIcon from "../assets/images/icon-order-confirmed.svg";
import DummyIcon from "../assets/images/image-macaron-thumbnail.jpg";

interface CartItems {
  name: string;
  price: number;
  category: string;
  quantity: number;
  totalPrice: number;
}

type OrderCompletedProps = {
  setOrderCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  setCartItems: React.Dispatch<React.SetStateAction<CartItems[]>>;
};

const OrderCompleted = ({ setOrderCompleted, setCartItems }: OrderCompletedProps) => {
  const startNewOrder = () => {
    setOrderCompleted((prevItem) => !prevItem);
    setCartItems([]);
  };

  return (
    <div className="order-completed-container">
      <div className="order-completed-wrapper">
        <img
          src={OrderCompletedIcon}
          alt="Order confirmed"
          className="order-completed-icon"
          width={50}
        />
        <div className="order-confirmed-title">
          <h2>
            Order
            <br />
            Confirmed
          </h2>
          <span>We hope you enjoy your food!</span>
        </div>
        <div className="order-confirmed-list">
          <div className="order-confirmed-item">
            <img src={DummyIcon} alt="dummy icon" width={50} />
            <div className="order-confirmed-details">
              <h5>Classic Tiramisu</h5>
              <div className="order-confirmed-quantity">
                <span>1x</span>
                <span>@ $5.50</span>
              </div>
            </div>
          </div>
          <div className="order-confirmed-item">
            <img src={DummyIcon} alt="dummy icon" width={50} />
            <div className="order-confirmed-details">
              <h5>Classic Tiramisu</h5>
              <div className="order-confirmed-quantity">
                <span>1x</span>
                <span>@ $5.50</span>
              </div>
            </div>
          </div>
          <div className="order-confirmed-item">
            <img src={DummyIcon} alt="dummy icon" width={50} />
            <div className="order-confirmed-details">
              <h5>Classic Tiramisu</h5>
              <div className="order-confirmed-quantity">
                <span>1x</span>
                <span>@ $5.50</span>
              </div>
            </div>
          </div>
          <div className="order-confirmed-item">
            <img src={DummyIcon} alt="dummy icon" width={50} />
            <div className="order-confirmed-details">
              <h5>Classic Tiramisu</h5>
              <div className="order-confirmed-quantity">
                <span>1x</span>
                <span>@ $5.50</span>
              </div>
            </div>
          </div>

          <div className="order-completed-total">
            <span>Order Total</span>
            <span>$46.50</span>
          </div>
        </div>
        <button className="new-order" onClick={() => startNewOrder()}>
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default OrderCompleted;