import OneCard from "./OneCard/OneCard.jsx";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./Main.module.css";

const Main = ({ setPokoInfo }) => {
  const [fetchdData, setFetcData] = useState(null);

  const getFullData = async () => {
    try {
      const {
        data: { results },
      } = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      setFetcData(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFullData();
  }, []);

  return (
    <div className="main">
      <h1>list pokemon</h1>
      <ul className={styles.ul}>
        {fetchdData &&
          fetchdData.map((pokemon) => {
            {
              return (
                <OneCard
                  setPokoInfo={setPokoInfo}
                  key={pokemon.name}
                  url={pokemon.url}
                  name={pokemon.name}
                />
              );
            }
          })}
      </ul>
    </div>
  );
};

export default Main;
