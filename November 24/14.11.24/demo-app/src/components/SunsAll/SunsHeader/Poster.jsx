import"./Poster.css"
import img from "../recipe-page-main/assets/images/image-omelette.jpeg"
import React from "react";

const Poster = ()=>{
    return <div className="poster">
        <img src={img} className="img" />
    </div>
}

export default Poster  