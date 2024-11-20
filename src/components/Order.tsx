type Order = {
  name: string;
  price: number;
  category: string;
}


const Order = ({ name, price, category}: Order) => {
  return (
   <>
    <h4>Order</h4>
   </>
  )
}

export default Order