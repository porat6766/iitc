import styles from "./InfoPokimon.module.css";

import About from "./About/About.jsx";
import BaseStat from "./base-state/baseState.jsx";
import Evolution from "./Evolution/Evolution.jsx";
import Moves from "./Moves/Moves.jsx";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useState } from "react";

const InfoPokimon = ({ pokoInfo, isOpen, setPokoInfo }) => {
  const [compRendTypeData, setCompRendTypeData] = useState(
    <About poke={pokoInfo.data} />
  );
  console.log(pokoInfo);

  const componentsMap = {
    About: <About poke={pokoInfo?.data || pokoInfo} />,
    "Base stat": <BaseStat poke={pokoInfo?.data || pokoInfo} />,
    Evolution: <Evolution poke={pokoInfo?.data || pokoInfo} />,
    Moves: <Moves poke={pokoInfo?.data || pokoInfo} />,
  };

  const checkWhatToRender = (e) => {
    const selectedComponent = componentsMap[e.target.innerText] || null;
    return setCompRendTypeData(selectedComponent);
  };

  return (
    <div className="info-container">
      <Dialog open={isOpen}>
        <Button
          onClick={() => {
            setPokoInfo(null);
          }}
        >
          x
        </Button>
        <DialogTitle className={styles.name}>
          <h1>{pokoInfo.data.name || pokoInfo.name}</h1>
        </DialogTitle>
        <img
          className={styles.photo}
          src={
            pokoInfo.data.sprites.other["official-artwork"].front_shiny ||
            pokoInfo.img
          }
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button onClick={checkWhatToRender}>About</button>
          <button onClick={checkWhatToRender}>Base stat</button>
          <button onClick={checkWhatToRender}>Evolution</button>
          <button onClick={checkWhatToRender}>Moves</button>
        </div>
        {compRendTypeData}
      </Dialog>
    </div>
  );
};
export default InfoPokimon;
