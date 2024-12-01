// import styles from "./InfoPokimon.module.css";
// import About from "./About/About.jsx";
// import BaseStat from "./base-state/baseState.jsx";
// import Evolution from "./Evolution/Evolution.jsx";
// import Moves from "./Moves/Moves.jsx";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import Button from "@mui/material/Button";
// import { useState } from "react";

// const InfoPokimon = ({ pokoInfo, isOpen, setPokoInfo }) => {
//   const [compRendTypeData, setCompRendTypeData] = useState(
//     <About poke={pokoInfo?.data || pokoInfo} />
//   );
//   const [selectedButton, setSelectedButton] = useState("");

//   const componentsMap = {
//     About: <About poke={pokoInfo?.data || pokoInfo} />,
//     "Base stat": <BaseStat poke={pokoInfo?.data || pokoInfo} />,
//     Evolution: <Evolution poke={pokoInfo?.data || pokoInfo} />,
//     Moves: <Moves poke={pokoInfo?.data || pokoInfo} />,
//   };

//   const checkWhatToRender = (e) => {
//     const selectedComponent = componentsMap[e.target.innerText] || null;
//     setCompRendTypeData(
//       <div className={styles.contentTransition}>{selectedComponent}</div>
//     );
//     setSelectedButton(e.target.innerText);
//   };

//   return (
//     <div className={styles.infoContainer}>
//       <Dialog open={isOpen} PaperProps={{ className: styles.dialogPaper }}>
//         <Button
//           onClick={() => {
//             setPokoInfo(null);
//           }}
//           className={styles.closeButton}
//         >
//           x
//         </Button>
//         <DialogTitle className={styles.name}>
//           <h1>{pokoInfo?.data?.name || pokoInfo?.name || "Unknown Pokémon"}</h1>
//         </DialogTitle>
//         <img
//           className={styles.photo}
//           src={
//             pokoInfo?.data?.sprites?.other?.["official-artwork"]?.front_shiny ||
//             pokoInfo?.img ||
//             "default-image-url"
//           }
//           alt="Pokémon"
//         />
//         <div className={styles.buttonContainer}>
//           {["About", "Base stat", "Evolution", "Moves"].map((label) => (
//             <button
//               key={label}
//               onClick={checkWhatToRender}
//               className={selectedButton === label ? styles.selected : ""}
//             >
//               {label}
//             </button>
//           ))}
//         </div>
//         <div className={styles.contentContainer}>
//           <div className={styles.slideTransition}>{compRendTypeData}</div>
//         </div>
//       </Dialog>
//     </div>
//   );
// };

// export default InfoPokimon;

import styles from "./InfoPokimon.module.css";
import About from "./About/About.jsx";
import BaseStat from "./base-state/baseState.jsx";
import Evolution from "./Evolution/Evolution.jsx";
import Moves from "./Moves/Moves.jsx";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useState } from "react";
import Typography from "@mui/material/Typography";

const InfoPokimon = ({ pokoInfo, isOpen, setPokoInfo }) => {
  const [compRendTypeData, setCompRendTypeData] = useState(
    <About poke={pokoInfo?.data || pokoInfo} />
  );
  const [selectedButton, setSelectedButton] = useState("");

  const componentsMap = {
    About: <About poke={pokoInfo?.data || pokoInfo} />,
    "Base stat": <BaseStat poke={pokoInfo?.data || pokoInfo} />,
    Evolution: <Evolution poke={pokoInfo?.data || pokoInfo} />,
    Moves: <Moves poke={pokoInfo?.data || pokoInfo} />,
  };

  const checkWhatToRender = (e) => {
    const selectedComponent = componentsMap[e.target.innerText] || null;
    setCompRendTypeData(
      <div className={styles.contentTransition}>{selectedComponent}</div>
    );
    setSelectedButton(e.target.innerText);
  };

  return (
    <div className={styles.infoContainer}>
      <Dialog open={isOpen} PaperProps={{ className: styles.dialogPaper }}>
        <Button
          onClick={() => {
            setPokoInfo(null);
          }}
          className={styles.closeButton}
        >
          x
        </Button>
        <DialogTitle>
          <Typography variant="h6" className={styles.name}>
            {pokoInfo?.data?.name || pokoInfo?.name || "Unknown Pokémon"}
          </Typography>
        </DialogTitle>
        <img
          className={styles.photo}
          src={
            pokoInfo?.data?.sprites?.other?.["official-artwork"]?.front_shiny ||
            pokoInfo?.img ||
            "default-image-url"
          }
          alt="Pokémon"
        />
        <div className={styles.buttonContainer}>
          {["About", "Base stat", "Evolution", "Moves"].map((label) => (
            <button
              key={label}
              onClick={checkWhatToRender}
              className={selectedButton === label ? styles.selected : ""}
            >
              {label}
            </button>
          ))}
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.slideTransition}>{compRendTypeData}</div>
        </div>
      </Dialog>
    </div>
  );
};

export default InfoPokimon;
