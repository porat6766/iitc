import "./Header.css"
import React from "react";
import Preparation from "./SunsHeader/Preparation"
import Poster from "./SunsHeader/Poster"

const Header = ()=>{
    return <div className="header">
    <Poster/>
    <Preparation/>
    <br />
    </div>
}

export default Header