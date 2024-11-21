import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import InfoPokimon from "./Components/InfoPocimon/InfoPocimon";
import { useState, useEffect } from "react";

function App() {
  const [pokoInfo, setPokoInfo] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // if (pokoInfo && isOpen===false) {
  //   setIsOpen(true);
  // }
  useEffect(() => {
    pokoInfo && setIsOpen(true);
  });

  return (
    <div className="app">
      {pokoInfo && (
        <InfoPokimon
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setPokoInfo={setPokoInfo}
          pokoInfo={pokoInfo}
        />
      )}
      <div className="home-page">
        <Header />
        <Main setPokoInfo={setPokoInfo} />
      </div>
    </div>
  );
}

export default App;
