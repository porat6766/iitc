import { useDispatch, useSelector } from "react-redux";
import { increase, subtact } from "../store/actions/calcAction";
  
const Calc = () => {
  const dispatch = useDispatch();
  const Calc = useSelector((state) => state);
  console.log(Calc);

  return (
    <div className="Calc">
      <button
        onClick={() => {
          dispatch(increase());
        }}
        className="Plus"
      >
        +
      </button>
      <p>{Calc.calc}</p>
      <button
        onClick={() => {
          dispatch(subtact());
        }}
        className="Minus"
      >
        -
      </button>
    </div>
  );
};

export default Calc;
