import { useState } from "react";
import "./App.css";
import FormComp from "./Components/FormComponent";
import ResultComp from "./Components/ResultForm";

function App() {
  const [userChoise, setUserChoise] = useState(0);
  const [didUserSubmit, setDidUserSubmit] = useState(false);
  return (
    <div className={`App ${didUserSubmit ? "beRed" : ""}`}>
      <div className="userChoise">{userChoise}</div>
      {didUserSubmit ? (
        <ResultComp value={userChoise} setDidUserSubmit={setDidUserSubmit} />
      ) : (
        <FormComp
          setUserChoise={setUserChoise}
          setDidUserSubmit={setDidUserSubmit}
        />
      )}
    </div>
  );
}

export default App;
