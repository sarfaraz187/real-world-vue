<template>
  <form @submit.prevent="handleSubmit">
    <h3>{{ title }}</h3>
    <input type="email" /> <br />
    <input type="password" /> <br />
    <button>Submit</button>
  </form>
</template>

<script>
console.log("Custom Form :");

export default {
  data() {
    return {
      title: "Login Form",
    };
  },
  methods: {
    handleSubmit() {
      console.log("Submitted");
    },
  },
};
</script>
