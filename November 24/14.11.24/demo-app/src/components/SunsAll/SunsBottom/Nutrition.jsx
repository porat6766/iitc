import "./Nutrition.css"
import React from "react";

const Nutrition = ()=>{
    return <div className="nutrition">
        
        <h2>Nutrition</h2>
        
        <p className="p-nutrition">The table below shows nutritional values per serving without the additional fillings.
        </p>

        <div className="nutritional-values"><div className="start-nutrition">
            calories
      </div><div className="bold-data">277kcal</div></div>

      <hr />

        <div className="nutritional-values"><div className="start-nutrition">Carbs</div><div className="bold-data">0g</div></div>               
      
      <hr />
        
        <div className="nutritional-values"><div className="start-nutrition">
             Protein
       </div><div className="bold-data">20g</div></div>

   
      <hr />

        <div className="nutritional-values"><div className="start-nutrition">
        Fat
      </div><div className="bold-data">22g
       </div></div>

    </div>
}

export default Nutrition