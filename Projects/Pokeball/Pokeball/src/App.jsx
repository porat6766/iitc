import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Add from "./Components/Add/Add";
import About from "./Components/About/About.jsx";
import NavBar from "./Components/NavBar.jsx";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="add" element={<Add />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  ); 
}

export default App;
