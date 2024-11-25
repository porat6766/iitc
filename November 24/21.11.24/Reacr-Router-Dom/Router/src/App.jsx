import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import DashBord from "./Components/DashBord/DashBord.jsx";
import Articles from "./Components/Articles/Articles.jsx";
import NavBar from "./Components/NavBar.jsx";
import Tech from "./Components/Articles/Tech/Tech.jsx";

function App() {
  const Home = () => {
    return <h1>HOME PAGE</h1>;
  };

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashBord" element={<DashBord />} />
          <Route path="/articles" element={<Articles />}>
            <Route path="news" element={<h1>News</h1>} />
            <Route path="sports" element={<h1>Sports</h1>}></Route>
            <Route path="sports/:id" element={<Tech />}></Route>
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
      ;
    </>
  );
}

export default App;
