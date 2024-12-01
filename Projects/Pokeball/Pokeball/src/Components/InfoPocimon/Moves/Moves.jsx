import styles from "./Moves.module.css";

const Moves = ({ poke }) => {
  return (
    <div className={styles.moves}>
      <h1>Moves</h1>
      <ol className={styles.ulMoves}>
        {poke.moves.slice(0, 20).map((move, index) => (
          <li key={move.move.name} className="move-card">
            <p>{move.move.name}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Moves;
