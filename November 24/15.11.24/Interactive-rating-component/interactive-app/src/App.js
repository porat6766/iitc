import { useState } from "react";

import "./App.css";
import DisplayPage from "./Components/DisplayPage/DisplayPage.jsx";
import FormPage from "./Components/FormPage/FormPage.jsx";

function App() {
  const [userChoiseNum, setUuserChoiseNum] = useState(0);
  const [userChoiseBoolean, setuserChoiseBoolean] = useState(false);
  console.log(userChoiseNum);

  return (
    <div className="app">
      {userChoiseBoolean ? (
        <DisplayPage userChoiseNum={userChoiseNum} />
      ) : (
        <FormPage
          setUuserChoiseNum={setUuserChoiseNum}
          setuserChoiseBoolean={setuserChoiseBoolean}
        />
      )}
    </div>
  );
}

export default App;
