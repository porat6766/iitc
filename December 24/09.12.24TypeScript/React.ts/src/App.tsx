import { useEffect, useState, useRef } from "react"
import axios from "axios";
import { api } from "./api";

const catsArrey= [{id:"1",name:"BABA"},{id:"2",name:"MAMA"}]

interface Cat {
  id:string;
  name:string;
}

function App() {
  const [cats, setCats] = useState<Cat[]>([]);
  const inputRef = useRef<HTMLInputElement>(null)

useEffect(()=>{
  (async()=>{
    const {data}= await api.get("/cats")
    setCats(data)
  })()
},[])

const removeCat=async (id:string)=>{
  api.delete(`/cats/${id}`)
  setCats((prev)=>prev.filter((cat)=>cat.id !== id))
}

const handleAdd = async () => {
  const newComment = inputRef.current?.value;

  if (!newComment) {
    alert("Please enter a comment before submitting.");
    return;
  }

  const newCat = { name:newComment };
console.log(newCat);

  try {
    const { data } = await api.post("cats", newCat);

    setCats((prev) => [...prev, data]);

    if (inputRef.current) { 
      inputRef.current.value = "";
    }
  } catch (error) {
    console.error("Failed to add comment:", error);
    alert("Something went wrong. Please try again.");
  }
};


const log = (ev:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
  if (ev) {
    console.log("bob"); 
  }
}

return (
<div>
   <div>
      <input type="text" ref={inputRef}/>
      <button onClick={handleAdd}>Add</button>
   </div>

   <ul>
    {cats.map((cat)=>{
     return <div>
                 <li key={cat.id}>
                     <span>{cat.name}</span>
                     <button onClick={()=>{removeCat(cat.id)}} className="delete">Delete</button>
                </li>
            </div>

      })}
   </ul>
   <button onClick={log}>LOG</button>
</div>
  )
}

export default App


