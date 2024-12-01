import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import SignUp from "./Components/Sign-up";
import Login from "./Components/Log-in";

function App() {
  const user = useSelector((state) => {
    state.user;
  });
  console.log(user);

  return (
    <div className="app">
      <SignUp />
      <Login />
    </div>
  );
}

export default App;
