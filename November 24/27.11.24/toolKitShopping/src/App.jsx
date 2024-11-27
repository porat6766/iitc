import "./App.css";
import Cart from "./Components/Cart";
import Products from "./Components/Products";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }} className="app">
      <h1> Hello to your cart</h1>
      <Products />
      <Cart />
    </div>
  );
}

export default App;
