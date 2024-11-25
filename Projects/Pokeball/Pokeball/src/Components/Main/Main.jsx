import OneCard from "./OneCard/OneCard.jsx";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./Main.module.css";

const Main = ({ setPokoInfo }) => {
  const [fetchdData, setFetcData] = useState(null);
  const [pokedexStorage, setPokedexStorage] = useState(null);

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

  const getFromStorage = () => {
    const pokedex = JSON.parse(localStorage.getItem("pokedex")) || [];
    setPokedexStorage(pokedex);
  };

  useEffect(() => {
    getFullData();
    getFromStorage();
  }, []);

  return (
    <div className="main">
      <ul className={styles.ul}>
        {fetchdData &&
          pokedexStorage &&
          [...fetchdData, ...pokedexStorage].map((pokemon) => {
            {
              return (
                <OneCard
                  setPokoInfo={setPokoInfo}
                  key={pokemon.name}
                  url={pokemon.url}
                  name={pokemon.name}
                  pokemon={pokemon}
                />
              );
            }
          })}
      </ul>
    </div>
  );
};

export default Main;
