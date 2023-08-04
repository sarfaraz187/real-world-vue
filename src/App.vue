<script setup lang="ts">
import CustomForm from "./components/CustomForm.vue";
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <!-- <p v-if="isVisible">{{ isVisible}}</p>
    <p v-else-if="!isVisible">{{ isVisible}}</p> -->

    <!-- <button v-on:click="toggle">Click Me!!</button> -->
    <p v-show="count >= 5">Your count has crossed : 5</p>    
    <p>Count is: {{ count }}</p>
    <button @click="count++">Add 1</button>
    <CustomForm/>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<script lang="ts">
export default {
  data() {
    return {
      title: "OneStopTransformation AG",
      isVisible: true,
      count: 0,
    };
  },
  methods: {
    toggle() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
