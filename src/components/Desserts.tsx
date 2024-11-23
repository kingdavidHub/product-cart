import { useEffect, useState } from "react";
import dessertsData from "../data/data";
import cart from "../assets/images/icon-add-to-cart.svg";
import IconIncrement from "../assets/images/icon-increment-quantity.svg";
import IconDecrement from "../assets/images/icon-decrement-quantity.svg";

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

type DesertProps = {
  addToCart: (item: CartItems) => void;
  cartItems: CartItems[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItems[]>>;
};

const Desserts = ({ addToCart, cartItems, setCartItems }: DesertProps) => {
  const [data] = useState(dessertsData);
  const [documentWidth, setDocumentWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setDocumentWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  interface ImageSrc {
    image: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
  }

  const getImageSrc = (item: ImageSrc): string => {
    if (documentWidth >= 1024) {
      return item.image.desktop;
    } else if (documentWidth >= 768) {
      return item.image.tablet;
    } else {
      return item.image.mobile;
    }
  };

  const handleCart = (
    item: Omit<CartItems, "quantity" | "totalPrice" | "thumbnail">
  ) => {
    const { image, ...items } = item;
    const cart = {
      ...items,
      quantity: 1,
      totalPrice: item.price,
      thumbnail: image.thumbnail,
      image: image,
    };
    addToCart(cart);
  };

  const getItemQuantity = (itemName: string): number => {
    const cartItem = cartItems.find((item) => item.name === itemName);
    return cartItem?.quantity ?? 0;
  };

  type CartMethod = {
    incrementItem: (itemName: string) => void;
    decrementItem: (itemName: string) => void;
  };

  const cartMethod: CartMethod = {
    incrementItem: (itemName: string) => {
      setCartItems((prevItems) => {
        const updatedItems = prevItems.map((item) => {
          if (item.name === itemName) {
            return {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.totalPrice + item.price,
            };
          }
          return item;
        });
        return updatedItems;
      });
    },
    decrementItem: (itemName: string) => {
      setCartItems((prevItems) => {
        const updatedItems = prevItems
          .map((item) => {
            if (item.name === itemName) {
              const newQuantity: number = item.quantity - 1;
              if (newQuantity === 0) {
                return null;
              }
              return {
                ...item,
                quantity: newQuantity,
                totalPrice: item.totalPrice - item.price,
              };
            }
            return item;
          })
          .filter((item): item is CartItems => item !== null);

        return updatedItems;
      });
    },
  };

  return (
    <>
      <div className="dessert_order_ui">
        {data.map((item, key) => (
          <div key={key}>
            {cartItems.some((cartItem) => cartItem.name === item.name) ? (
                <div className="dessert_view desert_active">
                  <img src={getImageSrc(item)} className="dessert-image" />
                  <div className="add_to_cart cart-ready">
                    <button onClick={() => cartMethod.incrementItem(item.name)}>
                      <img src={IconIncrement} alt="" />
                    </button>
                    <span>{getItemQuantity(item.name)}</span>
                    <button onClick={() => cartMethod.decrementItem(item.name)}>
                      <img src={IconDecrement} alt="" />
                    </button>
                  </div>
                </div>
            ) : (
                <div className="dessert_view">
                  <img src={getImageSrc(item)} className="dessert-image" />
                  <div className="add_to_cart">
                    <button
                      className="cart-inactive"
                      onClick={() => handleCart(item)}
                    >
                      <span>
                        <img src={cart} alt="Add to cart" />
                      </span>
                      Add to Cart
                    </button>
                  </div>
                </div>
            )}
            <div className="dessert_order_info">
              <p>{item.category}</p>
              <h3>{item.name}</h3>
              <h4>${item.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Desserts;
