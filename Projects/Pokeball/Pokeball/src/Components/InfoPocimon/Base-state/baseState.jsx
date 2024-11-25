import { useState, useEffect } from "react";
import LinearProgressWithLabel from "./Slide";

const BaseStat = ({ poke }) => {
  const [total, setTotal] = useState(0);
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
          <LinearProgressWithLabel value={stat.base_stat ?? 200} />
        </div>
      ))}

      <label htmlFor="total">Total</label>
      <LinearProgressWithLabel value={total ? total : 0} />
    </div>
  );
};

export default BaseStat;
