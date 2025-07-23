import React from "react";
import type { Task } from "../../store/useTaskStore";
import useTaskStore from "../../store/useTaskStore";

const TaskCard = ({ id, task, completed }: Task) => {
  const { removeTask } = useTaskStore((store) => store);
  return (
    <React.Fragment>
      <div className="bg-white p-2 [box-shadow:0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
        <div className="p-6">
          <p
            className={`${
              !completed && "!text-red-400"
            }mt-2 text-2xl font-semibold text-slate-500 leading-relaxed`}
          >
            {task}
          </p>
          <button
            onClick={() => removeTask(Number(id))}
            type="button"
            className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm font-medium tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TaskCard;
