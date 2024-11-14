import "./Preparation.css"
import React from "react";





const Preparation = ()=>{
    return <div className="head-write">
         <div className="reciepe">
             <h1 className="reciepe-title">Simple Omelette Recipe</h1>
             <p className="describe-reciepe">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
                to perfection, optionally filled with your choice of cheese, vegetables, or meats.
             </p>
         </div>
         <div className="Preparation">
            <label className="label-Preparation">Preparation time</label>
            <ul className="Preparation-ul">
                <li><span className="start-bold">Total:</span> Approximately 10 minutes</li>
                <li><span className="start-bold">Preparation:</span> 5 minutes</li>
                <li><span className="start-bold">Cooking:</span> 5 minutes</li>
            </ul>
         </div>
<hr />
    </div>
}

export default Preparation