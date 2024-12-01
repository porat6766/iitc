import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./About.module.css";

const About = ({ poke }) => {
  console.log(poke);

  const [speciesData, setSpeciesData] = useState(null);

  const fetchDetail = async () => {
    try {
      const speciesVar = await axios.get(poke?.species?.url);
      setSpeciesData(speciesVar.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (poke?.species?.url) {
      fetchDetail();
    } else {
      setSpeciesData(poke);
    }
  }, [poke]);

  const checkGender = (rate) => {
    const genderRates = {
      "-1": "Genderless",
      0: "100% Male",
      1: "87.5% Male, 12.5% Female",
      2: "75% Male, 25% Female",
      3: "66.7% Male, 33.3% Female",
      4: "50% Male, 50% Female",
      5: "33.3% Male, 66.7% Female",
      6: "25% Male, 75% Female",
      7: "12.5% Male, 87.5% Female",
      8: "100% Female",
    };
    return genderRates[rate] || "Unknown rate";
  };

  return (
    <div className={styles.about}>
      <h1>About</h1>
      <ul className={styles.oneDetailUl}>
        <li>
          <span>Species:</span>
          <span>
            {speciesData?.evolves_from_species?.name ||
              speciesData?.evolves_from ||
              "None"}
          </span>
        </li>
        <li>
          <span>Weight:</span>
          <span>
            {speciesData?.weight ? speciesData.weight + " dm" : "Unknown"}
          </span>
        </li>
        <li>
          <span>Abilities:</span>
          <span>
            {speciesData?.abilities?.length
              ? speciesData.abilities
                  .map((ability) => ability?.ability?.name || "Unknown")
                  .join(", ")
              : "Unknown"}
          </span>
        </li>
      </ul>
      <label htmlFor="two-detail">Breeding</label>
      <ul className={styles.twoDetailUl} name="two-detail">
        <li>
          <span>Gender:</span>
          <span>
            {speciesData?.gender_rate !== undefined || speciesData?.gender
              ? checkGender(speciesData?.gender_rate || speciesData.gender)
              : "Unknown"}
          </span>
        </li>
        <li>
          <span>Egg Groups:</span>
          <span>
            {Array.isArray(speciesData?.egg_groups)
              ? speciesData.egg_groups
                  .map((group) => group?.name || "Unknown")
                  .join(", ")
              : typeof speciesData?.egg_groups === "string"
              ? speciesData.egg_groups
              : "Unknown"}
          </span>
        </li>
        <li>
          <span>Egg Cycle:</span>
          <span>
            {speciesData?.hatch_counter || speciesData?.egg_cycle || "Unknown"}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default About;
