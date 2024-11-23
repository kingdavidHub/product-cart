import "../styles/OrderCompleted.css";
import OrderCompletedIcon from "../assets/images/icon-order-confirmed.svg";
import { getTotalPrice } from "../utils/app";

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

type OrderCompletedProps = {
  setCartItems: React.Dispatch<React.SetStateAction<CartItems[]>>;
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItems[];
};

const OrderCompleted = ({
  setCartItems,
  isOpen,
  onClose,
  cartItems,
}: OrderCompletedProps) => {
  const startNewOrder = () => {
    setCartItems([]);
  };

  if (!isOpen) return null;

  return (
    <div onClick={onClose} className="order-completed-overlay">
      <div className="order-completed-container">
        <div className="order-completed-wrapper">
          <img
            src={OrderCompletedIcon}
            alt="Order confirmed"
            className="order-completed-icon"
            width={50}
          />
          <div className="order-confirmed-title">
            <h2>Order Confirmed</h2>
            <span>We hope you enjoy your food!</span>
          </div>
          <div className="order-confirmed-list">
            {cartItems.map((item, index) => (
              <div className="order-confirmed-item" key={index}>
                <img src={item.image.thumbnail} alt="dummy icon" width={50} />
                <div className="order-confirmed-details">
                  <h5>{item.name}</h5>
                  <div className="order-confirmed-quantity">
                    <span>{item.quantity}x</span>
                    <span>@ ${item.totalPrice}</span>
                  </div>
                </div>
              </div>
            ))}

            <div className="order-completed-total">
              <span>Order Total</span>
              <span>${getTotalPrice(cartItems)}</span>
            </div>
          </div>
          <button className="new-order" onClick={() => startNewOrder()}>
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCompleted;
