import Main from "../Components/Main/Main";
import InfoPokimon from "./InfoPocimon/InfoPocimon";
import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import styles from "./homePage.module.css";
const HomePage = () => {
  const [pokoInfo, setPokoInfo] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    pokoInfo && setIsOpen(true);
  });

  return (
    <div className={styles["home-page"]}>
      <NavBar />
      {pokoInfo && (
        <InfoPokimon
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setPokoInfo={setPokoInfo}
          pokoInfo={pokoInfo}
        />
      )}
      <div className="home-page">
        <h1 className={styles.title}>Pokedex</h1>
        <Main setPokoInfo={setPokoInfo} />
      </div>
    </div>
  );
};
export default HomePage;
