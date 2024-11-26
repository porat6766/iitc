import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import Calc from "./Components/Calc.jsx";
import Presentation from "./Components/Presentation.jsx";
function App() {
  return (
    <>
      <Provider store={store}>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Redux Calc</h1>
          <Calc />
          <Presentation />
        </div>
      </Provider>
    </>
  );
}

export default App;
