// import { useSelector } from "react-redux";
// const Presentation = () => {
//   const calcVari = useSelector((state) => {
//     state;
//   });
//   console.log(calcVari);
//   return <div className="Presentation">{calcVari.calc}</div>;
// };
// export default Presentation;
import { useSelector } from "react-redux";

const Presentation = () => {
  const calcVari = useSelector((state) => state.calc);

  console.log(calcVari);

  return <div className="Presentation">{calcVari}</div>;
};

export default Presentation;
