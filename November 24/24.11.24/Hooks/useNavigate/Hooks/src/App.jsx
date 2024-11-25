import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./Components/SignInPage.jsx";
import QueryPrint from "./Components/QueryPrint.jsx";
import "./App.css";
import Home from "./Components/Home";

function App() {
  return (
    <div className="app"> n 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Sign-In-Page"
            element={<SignInPage />}
            // loader={DamsmyDataPage}
          />
          <Route path="/query-print" element={<QueryPrint />} />
          {/* <Route path="/dammy-data" element={<DammyDataPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
