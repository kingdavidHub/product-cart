import { useEffect, useState } from "react";
import dessertsData from "../data/data";
import cart from "../assets/images/icon-add-to-cart.svg";

interface CartItems {
  name: string;
  price: number;
  category: string;
}

type DesertProps = {
  addToCart: (item: CartItems) => void;
};

const Desserts = ({ addToCart }: DesertProps) => {
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

  type ImageSrc = {
    image: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
  };

  const getImageSrc = (item: ImageSrc): string => {
    if (documentWidth >= 1024) {
      return item.image.desktop;
    } else if (documentWidth >= 768) {
      return item.image.tablet;
    } else {
      return item.image.mobile;
    }
  };

  return (
    <>
      <div className="dessert_order_ui">
        {data.map((item, key) => (
          <div key={key}>
            <div className="dessert_view">
              <img src={getImageSrc(item)} className="dessert-image" />
              <div className="add_to_cart">
                <button onClick={() => addToCart(item)}>
                  <span>
                    <img src={cart} alt="" />
                  </span>
                  Add to Cart
                </button>
              </div>
            </div>
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