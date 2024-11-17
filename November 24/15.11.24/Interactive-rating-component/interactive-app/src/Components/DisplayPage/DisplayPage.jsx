import "./Display.css"
import img from "./illustration-thank-you.svg"

const DisplayPage=(props)=>{
    return( 
  <div className="displayPage">
  <div className="img-container">
  <img src={img}  className="img" />
  </div>
  <p className="how-much-selected">You selected&nbsp;<div className="choose-num">{props.userChoiseNum}</div>&nbsp;out of 5</p>
  <h1 className="thank">Thank you!
  </h1>
  <p className="describe-thanks">We appreciate you taking the time to give a rating. If you ever need more support, 
   don’t hesitate to get in touch!
  </p>
  </div>
    )
}

export default DisplayPage