import { create } from "zustand";

export interface Task {
    id: number,
    task: string,
    completed: false
};

interface TaskStore {
    tasks: Task[],
    addTask: (task: Task) => void,
    removeTask: (id: number) => void
}

const useTaskStore = create<TaskStore>((set) => {

    const tasks: Task[] = [];

    const addTask = (task: Task) => {
        return set(state => ({
            tasks: [...state.tasks, task]
        }))
    };

    const removeTask = (id: number) => {
        return set(state => ({
            tasks: state.tasks.filter(task => task.id !== id)
        }))
    }

    return { tasks, addTask, removeTask }
});

export default useTaskStore;