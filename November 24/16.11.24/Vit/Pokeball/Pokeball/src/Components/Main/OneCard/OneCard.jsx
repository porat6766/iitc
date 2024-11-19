import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./OneCard.module.css";

const OneCard = (props) => {
  const [pokoData, setpokoData] = useState(null);

  const fethData = async () => {
    try {
      const poko = await axios.get(props.url);
      setpokoData(poko);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fethData();
  }, []);
  if (pokoData) {
    console.log(pokoData.data.name);
  }
  const typeColors = {
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    bug: "#A8B820",
    poison: "#A040A0",
    flying: "#A890F0",
    grass: "#78C850",
  };
  return (
    pokoData && (
      <li
        onClick={() => {
          props.setPokoInfo(pokoData);
        }}
        style={{
          backgroundColor:
            typeColors[pokoData.data.types[0].type.name] || "#fff",
        }}
        className={styles.li}
      >
        <h1>{pokoData.data.name}</h1>
        <img src={pokoData.data.sprites.front_default} alt="" />
        <div className="whrapTypes">
          {pokoData.data.types.map((type, index) => {
            return (
              <li className={styles.liType} key={`state ${index}`}>
                {type.type.name}
              </li>
            );
          })}
        </div>
      </li>
    )
  );
};

export default OneCard;
