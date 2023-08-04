<template>
  <label>
    {{ props.label }} <br />
    <input type="text" />
  </label>
</template>

<script setup>
const props = defineProps(["label"]);
console.log(props);
</script>
