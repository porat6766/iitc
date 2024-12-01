import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./OneCard.module.css";

const OneCard = (props) => {
  const [pokoData, setpokoData] = useState(null);

  const fethData = async () => {
    try {
      if (props.url) {
        const poko = await axios.get(props.url);
        setpokoData(poko);
      } else {
        setpokoData(props.pokemon);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fethData();
  }, []);

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
            typeColors[
              pokoData?.data?.types?.[0]?.type?.name || pokoData?.types?.[0]
            ] || "#f5f5f5",
        }}
        className={styles.li}
      >
        <h1>{pokoData?.data?.name || pokoData.name}</h1>
        <img
          style={{ width: "80px" }}
          src={
            pokoData?.data?.sprites?.other?.showdown?.front_default ||
            pokoData.img
          }
          alt=""
        />
        <div className="whrapTypes">
          {(pokoData?.data?.types || pokoData.types)?.map((type, index) => {
            const typeName = type.type?.name || type;
            return (
              <span className={styles.liType} key={`state ${index}`}>
                {typeName}
              </span>
            );
          })}
        </div>
      </li>
    )
  );
};

export default OneCard;
