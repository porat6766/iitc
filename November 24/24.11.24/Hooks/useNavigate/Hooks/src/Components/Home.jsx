import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [isAsus, setIsAsus] = useState("false");
  const [isApple, setIsApple] = useState("false");
  const [isDell, setIsDell] = useState("false");

  console.log(isAsus, isApple, isDell);

  return (
    <div>
      <h1>Home</h1>
      <button>
        <Link to={"/Sign-In-Page"}>sign in</Link>
      </button>
      <button
        onClick={() => {
          setIsApple(true);
        }}
      >
        Apple
      </button>
      <button
        onClick={() => {
          setIsAsus(true);
        }}
      >
        Asus
      </button>
      <button
        onClick={() => {
          setIsDell(true);
        }}
      >
        Dell
      </button>
      <button>
        <Link
          to={`/query-print?Apple=${isApple}&Asus=${isAsus}&Dell=${isDell}`}
        >
          query-print
        </Link>
      </button>
      <button>
        <Link to={`/dammy-data`}>Dammy data</Link>
      </button>
    </div>
  );
};

export default Home;
