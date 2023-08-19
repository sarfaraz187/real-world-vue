import { defineStore } from "pinia";

export const store = defineStore("myList", {
  state: () => ({
    list: "",
  }),
  getters: {},
  actions: {
    addToList() {
      this.list++;
    },
  },
});
