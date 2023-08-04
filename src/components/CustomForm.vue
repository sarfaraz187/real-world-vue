<template>
  <form @submit.prevent="handleSubmit">
    <h3>{{ title }}</h3>
    <input v-model="email" type="email" /> <br />
    <input v-model="password" type="password" /> <br />
    <button>Submit</button>
  </form>
</template>

<script>
console.log("Custom Form :");

export default {
  data() {
    return {
      title: "Login Form",
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log("Submitted :", this.email, this.password);
    },
  },
};
</script>
