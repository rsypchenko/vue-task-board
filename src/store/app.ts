// Utilities
import { defineStore } from "pinia";

const tasks = [
  {
    id: 1,
    title: "Task 1",
    description: "Text 1",
    state: "todo",
  },
  {
    id: 1,
    title: "Task 2",
    description: "Text 2",
    state: "progress",
  },
  {
    id: 1,
    title: "Task 3",
    description: "Text 3",
    state: "review",
  },
  {
    id: 1,
    title: "Task 4",
    description: "Text 4",
    state: "done",
  },
];

export const useAppStore = defineStore("tasks", {
  state: () => ({
    tasks: tasks,
  }),
  getters: {
    todos(state) {
      return state.tasks.filter((task) => task.state === "todo");
    },
    progress(state) {
      return state.tasks.filter((task) => task.state === "progress");
    },
    review(state) {
      return state.tasks.filter((task) => task.state === "review");
    },
    done(state) {
      return state.tasks.filter((task) => task.state === "done");
    }
  },
});
