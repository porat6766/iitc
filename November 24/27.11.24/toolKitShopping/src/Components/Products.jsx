import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../store/slices/cartSlice";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 4500,
  },
  {
    id: 2,
    name: "Smartphone",
    price: 2500,
  },
  {
    id: 3,
    name: "Headphones",
    price: 350,
  },
];

const Products = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    const itemData = {
      ...item,
      quantity: 1,
      totalItemPrice: item.price,
    };
    dispatch(addItem(itemData));
  };

  return (
    <div className="products">
      <h2>Products list</h2>
      {products.map((product) => {
        return (
          <div key={product.id} className="oneProduct">
            <h4>{product.name}</h4>
            <h4>{product.price}</h4>
            <button onClick={() => handleAdd(product)}>Add</button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
