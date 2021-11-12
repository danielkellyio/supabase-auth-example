<script setup>
import { ref } from "vue";
const form = ref({
  name: "",
  password: "",
});
</script>

<template>
  <div class="max-w-lg m-auto">
    <h1 class="text-3xl mb-5">Login</h1>
    <label>Username <input v-model="form.name" type="text" /></label>
    <label>Password <input v-model="form.password" type="password" /></label>
    <button>Login</button>
  </div>
</template>
