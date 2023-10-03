// Utilities
import { defineStore } from "pinia";

const tasks = [
  {
    id: 1,
    title: "Task 1",
    subtitle: "Subtitle 1",
    text: "Text 1",
    state: "todo",
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
  },
});
