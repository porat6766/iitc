import styles from "./Moves.module.css";

const Moves = ({ poke }) => {
  poke && console.log(poke.moves);

  return (
    <div className="moves">
      <h1>Moves</h1>
      <ul className={styles.ulMoves}>
        {poke.moves.slice(0, 20).map((move, index) => (
          <div key={move.move.name} className="move-card">
            <p>{move.move.name}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Moves;
