import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { useState } from "react";

function App() {
  const [pokoInfo, setPokoInfo] = useState();
  console.log(pokoInfo);

  return (
    <div className="app">
      <Header />
      <Main setPokoInfo={setPokoInfo} />
    </div>
  );
}

export default App;
