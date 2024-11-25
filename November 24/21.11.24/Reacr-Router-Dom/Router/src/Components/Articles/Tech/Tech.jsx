import { useParams } from "react-router-dom";
const Tech = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <div>HELLO</div>
    </>
  );
};
export default Tech;
