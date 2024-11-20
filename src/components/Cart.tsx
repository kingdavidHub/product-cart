import Order from "./Order";

interface CartItem {
  name: string;
  price: number;
  category: string;
}

interface CartProps {
  cartItems: CartItem[];
}

const Cart = ({ cartItems }: CartProps) => {
  return (
    <>
      <div className="cart_view">
        <h2>Your Cart (0)</h2>
        <Order name="Order" price={0} category="Category" />
        {/* {cartItems.length > 0 ? (
          <>
            {cartItems.map((item, index) => (
              <Order key={index} {...item} />
            ))}
          </>
        ) : (
          <>
            <p>Your added items will appear here</p>
          </>
        )} */}
      </div>
    </>
  );
};

export default Cart;
