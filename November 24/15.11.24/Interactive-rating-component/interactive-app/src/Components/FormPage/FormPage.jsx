import { useState } from "react"
import "./form-page.css"
import image from "./icon-star.svg"

const FormPage=(props)=>{

    const[elChoos, setelChoos]= useState(null)

    const chooseN = (ev)=>{
        setelChoos(ev.target.innerText)
        props.setUuserChoiseNum(ev.target.innerText)
    }
    
    const changeBollean=()=>{
        if (elChoos===null) {
            alert("plese rate first")
            
        }else{
            props.setuserChoiseBoolean(true)
        }
    }

    return(
    <div className="form-page">
    <div className="container-img=star">
    <img src={image} className="img=star"/>
    </div>
    <h1 className="title">How did we do?</h1>
    <p className="describe-how">Please let us know how we did with your support request. All feedback is appreciated 
    to help us improve our offering! 
    </p>
    <form className="form">
    <div className="wrap-numbers">
        {[1,2,3,4,5].map((num)=>{
       return  <span className={elChoos == num ?"number-bold":""} onClick={chooseN}>{num}</span>
})}
    </div>
    <button onClick={changeBollean} className="submit">Submit</button>
    </form>
    </div>
    )
}

export default FormPage