import React from "react";
import useTaskStore from "../../store/useTaskStore";
import TaskCard from "../share/TaskCard";
import { type Task } from "../../store/useTaskStore";

const TestTasks = () => {
  const { tasks, addTask } = useTaskStore((store) => store);

  return (
    <React.Fragment>
      <button
        type="button"
        className="btn"
        onClick={() =>
          addTask({ id: Math.random(), task: "test task", completed: false })
        }
      >
        Add
      </button>
      <section className="mx-10 my-10 p-4 ">
        <div className="grid grid-cols-4 gap-5">
          {tasks &&
            Array.isArray(tasks) &&
            tasks.length > 0 &&
            tasks?.map((task: Task) => <TaskCard key={task.id} {...task} />)}
        </div>
      </section>
    </React.Fragment>
  );
};

export default TestTasks;
