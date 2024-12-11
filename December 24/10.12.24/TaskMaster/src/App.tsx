import "./App.css";
import AddTask from "./Components/AddTask/AddTas.tsx";
import ListTasks from "./Components/ListTasks/ListTasks.tsx";
import { useState } from "react";
import Dialog from "./Components/Dialog/Dialog.tsx";

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: "Low" | "Medium" | "High";
  status: "Pending" | "In Progress" | "Completed";
}

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  return (
    <>
      <AddTask setTasks={setTasks} />
      <ListTasks setTasks={setTasks} tasks={tasks} setOpen={setOpen} />
      <Dialog open={open} setOpen={setOpen} />
    </>
  );
}

export default App;
