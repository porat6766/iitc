import Slider from "@mui/material/Slider";
import { useState, useEffect } from "react";

const BaseStat = ({ poke }) => {
  const [total, setTotal] = useState(0);
  console.log(poke);

  useEffect(() => {
    if (poke?.stats) {
      const statsTotal = poke.stats.reduce(
        (sum, stat) => sum + stat.base_stat,
        0
      );
      setTotal(statsTotal);
    }
  }, [poke?.stats]);

  return (
    <div className="base-state">
      <h1>Base stat</h1>
      {poke?.stats?.map((stat, index) => (
        <div key={stat.name}>
          <label htmlFor={stat.name}>{stat.stat.name}</label>
          <Slider
            min={0}
            max={600}
            name={stat.name}
            value={stat.base_stat ?? "Unknown"}
            valueLabelDisplay="on"
            valueLabelFormat={(value) => value}
          />
        </div>
      ))}

      <label htmlFor="total">Total</label>
      <Slider
        valueLabelDisplay="on"
        min={0}
        max={600}
        name="total"
        value={total ? total : 0}
      />
      {/* <h3 htmlFor="describe">Type defenses</h3>
      <p name="describe"></p> */}
    </div>
  );
};

export default BaseStat;
