<script setup>
import { useRouter } from "vue-router";
import useAuthUser from "@/composables/UseAuthUser";

const { user } = useAuthUser();

const router = useRouter();
if (!user.value) router.replace({ name: "Login" });
</script>
<template>
  <div v-if="user">
    <div>Hello {{ user.name }}</div>
  </div>
</template>
