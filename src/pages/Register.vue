<script setup>
import { ref } from "vue";
const form = ref({
  name: "",
  email: "",
  username: "",
  password: "",
});
</script>

<template>
  <div class="max-w-lg m-auto">
    <h1 class="text-3xl mb-5">Login</h1>
    <label>Name <input v-model="form.name" type="text" /></label>
    <label>Username <input v-model="form.username" type="text" /></label>
    <label>Email <input v-model="form.email" type="email" /></label>
    <label>Password <input v-model="form.password" type="password" /></label>
    <button>Login</button>
  </div>
</template>
