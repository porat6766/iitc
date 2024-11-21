import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  const updateInputName = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    console.log(text);
  });

  // const addP = (e) => {
  //   e.preventDefault();
  //   console.log(poko{name:name});
  // };

  return (
    <>
      <form onClick={addP}>
        <h1>add pokemon</h1>

        <div className="name">
          <label htmlFor="input">name</label>
          <input
            value={text}
            type="text"
            name="input"
            id="input"
            onChange={updateInputName}
          />
        </div>

        <div className="ability">
          <label htmlFor="input">ability</label>
          <input value={text} type="text" name="input" id="input" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
