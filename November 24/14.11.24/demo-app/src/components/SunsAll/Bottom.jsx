import "./bottom.css"
import React from "react";
import Ingredients from "./SunsBottom/Ingredients";
import Instruction from "./SunsBottom/Instruction";
import Nutrition from "./SunsBottom/Nutrition";

const Bottom = ()=>{
 return <div className="bottom"><Ingredients/>
 <Instruction/>
 <Nutrition/>
 </div>}

export default Bottom  