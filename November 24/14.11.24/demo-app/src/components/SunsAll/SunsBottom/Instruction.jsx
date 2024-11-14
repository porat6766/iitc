import "./Instruction.css"
import React from "react";


const Instruction = ()=>{
    return <div className="instruction">
        <h2>Instructions</h2>
        <ol className="Instructions-ol">
            <li><div className="whrap-instruction">
                <span className="Instructions-bold">Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
                    You can add a tablespoon of water or milk for a fluffier texture.
            </div>
           </li>
            
            <li><div className="whrap-instruction"><span className="Instructions-bold">Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil.</div>
            </li>

            <li><div className="whrap-instruction">
                <span className="Instructions-bold">Cook the omelette:</span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure
                    the eggs evenly coat the surface.
            </div> 
           </li>

            <li><div className="whrap-instruction">
                <span className="Instructions-bold">Add fillings (optional):</span> When the eggs begin to set at the edges but are still slightly runny in the
                    middle, sprinkle your chosen fillings over one half of the omelette.
            </div>
            </li>

            <li>
                <div className="whrap-instruction">
                    <span className="Instructions-bold">Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over the
                    fillings. Let it cook for another minute, then slide it onto a plate.
                </div>
           </li>

            <li>
                <div className="whrap-instruction"><span className="Instructions-bold">Enjoy:</span> Serve hot, with additional salt and pepper if needed.</div>
            </li>
        </ol>
    </div>
}

export default Instruction