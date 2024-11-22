import Order from "./Order";
import CarbonNeutral from "../assets/images/icon-carbon-neutral.svg";

interface CartItem {
  name: string;
  price: number;
  category: string;
  quantity: number;
  totalPrice: number;
}

interface CartProps {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  setOrderCompleted?: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpen: () => void;
}

const Cart = ({ cartItems, setCartItems, setOrderCompleted , handleOpen}: CartProps) => {
  const getTotalPrice = (cartItems: CartItem[]): number => {
    let totalOrder: number = 0;
    cartItems.map((item) => {
      totalOrder += item.totalPrice;
    });

    return totalOrder;
  };

  const confirmOrder = () => {
    if (setOrderCompleted) {
      setOrderCompleted((prevItem) => !prevItem);
    }
  };

  return (
    <>
      <div className={cartItems.length > 0 ? "cart-active" : "cart_empty"}>
        <h2>Your Cart ({cartItems.length})</h2>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item, index) => (
              <Order key={index} {...item} setCartItems={setCartItems} />
            ))}
            <div className="order-total">
              <span>Order Total</span>
              <span>${getTotalPrice(cartItems)}</span>
            </div>

            <div className="carbon-neutral-container">
              <img src={CarbonNeutral} alt="carbon neural" width={30} />
              <span>
                This is a <b>carbon-neutral</b> delivery
              </span>
            </div>

            <button className="order-button" onClick={() => handleOpen()}>Confirm Order</button>
          </>
        ) : (
          <>
            <p>Your added items will appear here</p>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
