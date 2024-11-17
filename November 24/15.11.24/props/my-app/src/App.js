import "./App.css";
import { useState } from "react";
import ChildComp from "./ChildComponents/ChildComp";

function App() {
  const [value, setCouner] = useState(0);

  const add = () => {
    setCouner(value + 1);
    console.log(value);
  };

  const Subtracting = () => {
    setCouner(value - 1);
    console.log(value);
  };

  return (
    <div className="App" >
      <h1 className="counter-title">COUNTER</h1>
      <div className="counter-container">
        <button onClick={Subtracting}>-</button>
        <p>{value}</p>
        <button onClick={add}>+</button>
      </div>
      <ChildComp counter={value} />
    </div>
  );
}

export default App;
