import OneCard from "./OneCard/OneCard.jsx";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./Main.module.css";

const Main = ({ setPokoInfo }) => {
  const [fetchdData, setFetchdData] = useState([]);
  const [pokedexStorage, setPokedexStorage] = useState([]);
  const [displayedPokemons, setDisplayedPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 20;

  const getFullData = async () => {
    try {
      const {
        data: { results },
      } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
      );
      setFetchdData((prev) => [...prev, ...results]);
    } catch (error) {}
  };

  const getFromStorage = () => {
    const pokedex = JSON.parse(localStorage.getItem("pokedex")) || [];
    setPokedexStorage(pokedex);
  };

  const loadMore = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

  useEffect(() => {
    getFromStorage();
  }, []);

  useEffect(() => {
    getFullData();
  }, [offset]);

  useEffect(() => {
    if (fetchdData.length && pokedexStorage.length) {
      const uniquePokemons = [
        ...pokedexStorage,
        ...fetchdData.filter(
          (pokemon) =>
            !pokedexStorage.some(
              (storedPokemon) => storedPokemon.name === pokemon.name
            )
        ),
      ];
      setDisplayedPokemons(uniquePokemons);
    } else {
      setDisplayedPokemons([...pokedexStorage, ...fetchdData]);
    }
  }, [fetchdData, pokedexStorage]);

  return (
    <div className="main">
      <ul className={styles.ul}>
        {displayedPokemons.map((pokemon, index) => (
          <OneCard
            setPokoInfo={setPokoInfo}
            key={pokemon.name + index}
            url={pokemon.url}
            name={pokemon.name}
            pokemon={pokemon}
          />
        ))}
      </ul>
      <button
        style={{
          display: "block",
          width: "fit-content",
          marginInline: "auto",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginBlock: "25px",
        }}
        onClick={loadMore}
        className={styles.loadMoreBtn}
        aria-label="Load more items"
      >
        Show More
      </button>
    </div>
  );
};

export default Main;
