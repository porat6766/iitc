// import { useState, useEffect } from "react";
// import axios from "axios";
// import styles from "./Evolution.module.css"

// const Evolution = ({ poke }) => {
//   const [speciesData, setSpeciesData] = useState(null);

//   const fetchDetail = async () => {
//     try {
//       const response = await axios.get(poke.species.url);
//       setSpeciesData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchDetail();
//   }, []);

//   return (
//     <div className="evolution">
//       {speciesData ? (
//         <>
//           <h2>Evolution Chain</h2>
//           {speciesData.evolves_from_species && (
//             <p>
//               <strong>Evolves From:</strong>{" "}
//               {speciesData.evolves_from_species.name}
//             </p>
//           )}
//           <p>
//             <strong>Base Happiness:</strong> {speciesData.base_happiness}
//           </p>
//           <p>
//             <strong>Capture Rate:</strong> {speciesData.capture_rate}
//           </p>
//         </>
//       ) : (
//         <p>Loading evolution data...</p>
//       )}
//     </div>
//   );
// };

// export default Evolution;
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Evolution.module.css";

const Evolution = ({ poke }) => {
  const [speciesData, setSpeciesData] = useState(null);

  const fetchDetail = async () => {
    try {
      const response = await axios.get(poke.species.url);
      setSpeciesData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <div className={styles.evolution}>
      {speciesData ? (
        <>
          <h2 className={styles.heading}>Evolution Chain</h2>
          {speciesData.evolves_from_species && (
            <p>
              <strong>Evolves From:</strong>{" "}
              {speciesData.evolves_from_species.name}
            </p>
          )}
          <p>
            <strong>Base Happiness:</strong> {speciesData.base_happiness}
          </p>
          <p>
            <strong>Capture Rate:</strong> {speciesData.capture_rate}
          </p>
        </>
      ) : (
        <p className={styles.loading}>Loading evolution data...</p>
      )}
    </div>
  );
};

export default Evolution;
