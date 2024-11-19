import "./Copidon.css"
import axios from "axios"
import { useState,useEffect } from "react"


const Copidon = ()=>{

const[copidon, setCopidon]= useState([])
console.log(copidon);

const getDataApi = async()=>{
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setCopidon(response.data)
    console.log(response.data);
    // return response
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

///המערך הריק מסמן  לו רק בפעם הראשונה תרוץ
useEffect(()=>{
    getDataApi()
},[])

    return <div className="card">
        this is my Copidon
        <ul>
        {copidon.map((copi)=>{
            return <li key={copi.id}>
                <h1>{copi.title}</h1>
            </li>
        })}
        </ul>
    </div>
}

export default Copidon