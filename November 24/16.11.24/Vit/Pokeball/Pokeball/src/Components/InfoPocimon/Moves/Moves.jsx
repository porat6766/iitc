import { useState } from "react";

const Moves = ({ poke }) => {
  poke && console.log(poke.moves);

  return (
    <div className="moves">
      <h1>Moves</h1>
      <div className="moves-grid">
        {poke.moves.slice(0, 20).map((move, index) => (
          <div key={move.move.name} className="move-card">
            <p>{move.move.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Moves;
