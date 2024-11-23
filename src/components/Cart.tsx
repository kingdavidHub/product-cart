import Order from "./Order";
import CarbonNeutral from "../assets/images/icon-carbon-neutral.svg";

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

interface CartProps {
  cartItems: CartItems[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItems[]>>;
  handleOpen: () => void;
}

const Cart = ({ cartItems, setCartItems, handleOpen }: CartProps) => {
  const getTotalPrice = (cartItems: CartItems[]): number => {
    let totalOrder: number = 0;
    cartItems.map((item) => {
      totalOrder += item.totalPrice;
    });

    return totalOrder;
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

            <button className="order-button" onClick={() => handleOpen()}>
              Confirm Order
            </button>
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
