import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todoList", {
  state: () => ({
    list: [],
  }),
  getters: {},
  actions: {
    addToList(item) {
      console.log({ item });
      this.list.push(item);
    },
  },
});
