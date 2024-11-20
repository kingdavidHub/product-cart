import Order from "./Order";

interface CartItem {
  name: string;
  price: number;
  category: string;
  quantity: number;
  totalPrice: number;
}

interface CartProps {
  cartItems: CartItem[];
}

const Cart = ({ cartItems }: CartProps) => {
  return (
    <>
      <div className={cartItems.length > 0 ? "cart-active" : "cart_empty"}>
        <h2>Your Cart ({cartItems.length})</h2>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item, index) => (
              <Order key={index} {...item} />
            ))}
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
