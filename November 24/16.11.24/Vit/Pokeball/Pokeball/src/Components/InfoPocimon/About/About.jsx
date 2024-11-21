import axios from "axios";
import { useEffect, useState } from "react";

const About = ({ poke }) => {
  const [speciesData, setSpeciesData] = useState(null);

  const fetchDetail = async () => {
    try {
      const speciesVar = await axios.get(poke.species.url);
      setSpeciesData(speciesVar.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  const checkGender = (rate) => {
    if (rate === -1) return "Genderless";
    return rate === 0
      ? "100% Male"
      : rate === 1
      ? "87.5% Male, 12.5% Female"
      : rate === 2
      ? "75% Male, 25% Female"
      : rate === 3
      ? "66.7% Male, 33.3% Female"
      : rate === 4
      ? "50% Male, 50% Female"
      : rate === 5
      ? "33.3% Male, 66.7% Female"
      : rate === 6
      ? "25% Male, 75% Female"
      : rate === 7
      ? "12.5% Male, 87.5% Female"
      : rate === 8
      ? "100% Female"
      : "Unknown rate";
  };

  return (
    <div className="about">
      <h1>About</h1>
      <ul className="one-detail-ul">
        <li>
          Species{" "}
          <span>{speciesData?.evolves_from_species?.name || "None"}</span>
        </li>
        <li>
          Height <span>{poke.height + " dc"}</span>
        </li>
        <li>
          Weight <span>{poke.weight + " dm"}</span>
        </li>
        <li>
          Abilities
          <span>
            {poke.abilities.map((ability) => ability.ability.name).join(", ")}
          </span>
        </li>
      </ul>
      <label htmlFor="two-detail">Breeding</label>
      <ul className="two-detail-ul" name="two-detail">
        <li>
          Gender
          <span>
            {speciesData?.gender_rate !== undefined
              ? checkGender(speciesData.gender_rate)
              : "Unknown"}
          </span>
        </li>
        <li>
          Egg Groups
          <span>
            {speciesData?.egg_groups.map((group) => group.name).join(", ") ||
              "Unknown"}
          </span>
        </li>
        <li>
          Egg Cycle <span>{speciesData?.hatch_counter || "Unknown"}</span>
        </li>
      </ul>
    </div>
  );
};

export default About;
