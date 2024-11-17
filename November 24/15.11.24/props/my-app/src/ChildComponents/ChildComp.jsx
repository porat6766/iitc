import React from "react"

const ChildComp = (props)=>{
return(
    <div className="child">
        <h1>{props.counter}</h1>
    </div>
)
}

export default ChildComp