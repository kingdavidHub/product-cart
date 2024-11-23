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

export const getTotalPrice = (cartItems: CartItems[]): number => {
  let totalOrder: number = 0;
  cartItems.map((item) => {
    totalOrder += item.totalPrice;
  });

  return totalOrder;
};
