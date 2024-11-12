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
      {cartItems.length === 0 ? (
        <div className="cart_view">
          <h2>Your Cart (0)</h2>
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <>
          <h1>Hello world</h1>
        </>
      )}
    </>
  );
};

export default Cart;
