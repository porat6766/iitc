import { useEffect } from "react";
import { api } from "../../api";
import { Task } from "../../App";

interface ListTasksProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const ListTasks: React.FC<ListTasksProps | > = ({ tasks, setTasks, setOpen }) => {
  const fetchTasks = async () => {
    try {
      const { data } = await api.get("/tasks");
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const deleteTask = async (id: string) => {
    const listAfterDelete = tasks.filter((task) => task.id !== id);
    const { data } = await api.delete(`/tasks/${id}`);
    console.log(data);
    setOpen(false);
    setTasks(listAfterDelete);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ marginTop: "30px" }}>
      <ul>
        {tasks.map((task) => (
          <li
            style={{
              marginBottom: "5px",
              borderRadius: "12px",
              backgroundColor: "rgb(128, 127, 177)",
              color: "white",
              display: "flex",
              justifyContent: "space-evenly",
              padding: "12px",
            }}
            key={task.id}
          >
            <h3
              style={{
                marginBottom: "5px",
                borderRadius: "12px",
                backgroundColor: "rgb(128, 127, 177)",
                color: "black",
                fontWeight: "700",
                display: "flex",
                padding: "12px",
                textAlign: "center",
              }}
            >
              {task.title}
            </h3>
            <button
              style={{
                marginBottom: "5px",
                borderRadius: "12px",
                backgroundColor: "rgb(128, 127, 177)",
                color: "black",
                fontWeight: "700",
                padding: "6px",
                textAlign: "center",
              }}
            >
              EDIT
            </button>
            <button
              onClick={() => {
                deleteTask(task.id);
              }}
              style={{
                marginLeft: "5px",
                marginBottom: "5px",
                borderRadius: "12px",
                backgroundColor: "rgb(128, 127, 177)",
                color: "black",
                fontWeight: "700",
                padding: "12px",
                textAlign: "center",
              }}
            >
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTasks;
