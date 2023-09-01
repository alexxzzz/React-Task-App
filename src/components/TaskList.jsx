import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskList() {

  const {tasks} = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-4-xl font-bold text-center">Lista vacia</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2" id={tasks.id}>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
