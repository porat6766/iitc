import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <div className="addCart">
      <h2>Cart</h2>
      <h4>totalPrice:{cart.totalPrice}</h4>
      <h4>totalQuantity:{cart.totalQuantity}</h4>
      {cart.items.map((item) => {
        return (
          <div key={item.id}>
            <h6>{item.name}</h6>
            <h6>{item.price}</h6>
            <h6>{item.quantity}</h6>
            <h6>{item.totalItemPrice}</h6>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
export default Cart;
