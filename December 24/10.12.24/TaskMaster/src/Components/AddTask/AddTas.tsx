import { useRef } from "react";
import styles from "./AddTask.module.css";
import { api } from "../../api";
import { Task } from "../../App";

interface ListTasksProps {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const AddTask: React.FC<ListTasksProps> = ({ setTasks }) => {
  const inputTitleRef = useRef<HTMLInputElement | null>(null);
  const inputDescreptionRef = useRef<HTMLInputElement | null>(null);
  const inputdueDateRef = useRef<HTMLInputElement | null>(null);
  const inputPriorityRef = useRef<HTMLSelectElement | null>(null);
  const inputStatusRef = useRef<HTMLSelectElement | null>(null);

  const handleAddTask = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const newTask = {
      title: inputTitleRef.current?.value,
      descreption: inputDescreptionRef.current?.value,
      dueDate: inputdueDateRef.current?.value,
      priority: inputPriorityRef.current?.value,
      status: inputStatusRef.current?.value,
    };
    const { data } = await api.post("/tasks", newTask);
    setTasks((prev) => [...prev, data]);
    if (inputTitleRef?.current?.value) {
    }
    if (inputTitleRef.current) {
      inputTitleRef.current.value = "";
    }
    inputDescreptionRef.current!.value = "";
    inputdueDateRef.current!.value = "";
    inputPriorityRef.current!.value = "";
    inputStatusRef.current!.value = "";
  };

  return (
    <div>
      <form onSubmit={(ev) => handleAddTask(ev)} className={styles.addTaskForm}>
        <input ref={inputTitleRef} type="text" placeholder="Title" />
        <input
          ref={inputDescreptionRef}
          type="text"
          placeholder="Descreption"
        />
        <input ref={inputdueDateRef} type="date" placeholder="Due date" />
        <select ref={inputPriorityRef}>
          <option value="low">Low</option>
          <option value="meduim">Meduim</option>
          <option value="high">High</option>
        </select>
        <select ref={inputStatusRef}>
          <option value="pending">Pending</option>
          <option value="in progress">In progress</option>
          <option value="completed">Completed</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTask;
