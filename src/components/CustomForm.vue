<template>
  <form @submit.prevent="handleSubmit">
    <h3>{{ title }}</h3>
    <InputComponent v-model="email" type="email" v-bind:label="emailLabel" /> <br />
    <InputComponent v-model="password" type="password" v-bind:label="passwordLabel" /> <br />
    <button>Submit</button>
  </form>
</template>

<script setup>
import InputComponent from "./InputComponent.vue";
import { ref } from "vue";

const emailLabel = ref("Email");
const passwordLabel = ref("Password");

function handleSubmit(event: any) {
  // console.log("Submitted :", event, email, password);
}
</script>

// export default { // data() { // return { // title: "Login Form", // email: "", // password: "", // emailLabel: "Email", // }; // }, // methods: { // handleSubmit() { // console.log("Submitted :",
this.email, this.password); // }, // }, // };
