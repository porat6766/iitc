import { useState } from "react"

const ResultComp= (props)=>{
const [desc, setDesc]= useState("")

setTimeout(() => {
    if (+props.value===1) {
        setDesc("ONE")
    }
    if (+props.value===2) {
        setDesc("TWO")
    }
    if (+props.value===3) {
        setDesc("THREE")
    }
    if (+props.value===4) {
        setDesc("FOUR")
    }
    if (+props.value===5) {
        setDesc("FIVE")
    }
 
}, 1);

const backToVote = ()=>{
    props.setDidUserSubmit(false)
}

    return(
        <div className="container-form">
            <h1>{desc}</h1>
            <button onClick={backToVote}>BACK TO VOTE</button>
        </div>
    )
    }
    
    export default ResultComp