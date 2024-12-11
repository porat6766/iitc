import { useEffect, useRef, useState } from 'react';
import './App.css';

interface TODO {
  id: string;
  text: string;
  completed: boolean;
  description?: string;
}

function App() {
  const [todoList, setTodolist] = useState<TODO[]>([]);
  const [filterTodoList, setfilterTodolist] = useState<TODO[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [filter, setFilter] = useState<string>("all");

  const handleAdd = () => {
    if (!inputRef.current?.value) return;

    const newTodo = {
      id: inputRef.current.value,
      text: inputRef.current.value,
      completed: false,
    };
    setTodolist((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const toggleTask = (ev: React.MouseEvent<HTMLLIElement, MouseEvent>, id: string) => {
    setTodolist((prev) =>
      prev.map((toDo) =>
        toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo
      )
    );
  };

  const deleteTask = (id: string) => {
    setTodolist((prev) => prev.filter((task) => task.id !== id));
  };

  const cleanCompleted = () => {
    setTodolist((prev) =>
      prev.map((toDo) => ({
        ...toDo,
        completed: false,
      }))
    );
  };
  
  const renderFilterData=()=>{
    if (filter === "all") {
      setfilterTodolist(todoList);
    } else if (filter === "active") {
      setfilterTodolist(todoList.filter((toDo) => !toDo.completed));
    } else if (filter === "completed") {
      setfilterTodolist(todoList.filter((toDo) => toDo.completed));
    }
  }

  useEffect(() => {
    renderFilterData()
  }, [filter, todoList]);

  return (
    <div style={{borderRadius:"15px",backgroundColor:"#aa8392",padding:"20px",width:"fit-content",marginInline:"auto",textAlign:"center",display:"flex",flexDirection:"column",gap:"30px"}}>
      <h1>To Do List</h1> 
      <div >
      <button onClick={cleanCompleted} className="cleanAllCompletedBoolean">Clean completed</button>

        <label htmlFor="filter">Filter Todos: </label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Todos</option>
          <option value="active">Active Todos</option>
          <option value="completed">Completed Todos</option>
        </select>
      </div>
      <input ref={inputRef} type="text" placeholder="Add ToDo" />
      <button   onClick={handleAdd}>Add</button>
      <ul>
        {filterTodoList.map((todo) => (
          <li
            style={{listStyle:"none",width:"100%",display:"flex",justifyContent:"space-between"}}
            onClick={(ev) => toggleTask(ev, todo.id)}
            key={todo.id}
            className={todo.completed ? "done" : ""}
          >
            <div className="text">{todo.text}</div>
            <button
              onClick={() => {
              deleteTask(todo.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div style={{display:"flex",gap:"50px",justifyContent:"space-around"}}>
        <li style={{display:"flex",flexDirection:"column",gap:"10px",fontSize:"20px"}}><span>ALL</span>{todoList.length}</li>
        <li style={{display:"flex",flexDirection:"column",gap:"10px",fontSize:"20px"}}><span>Completed</span>{todoList.filter((toDo)=>toDo.completed===true).length}</li>
        <li style={{display:"flex",flexDirection:"column",gap:"10px",fontSize:"20px"}}><span>Active</span>{todoList.filter((toDo)=>toDo.completed===false).length}</li>
      </div>
    </div>
  );
} 

export default App;
