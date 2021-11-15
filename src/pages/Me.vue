<script setup>
import { useRouter } from "vue-router";
import useAuthUser from "@/composables/UseAuthUser";

// use necessary composables
const router = useRouter();
const { user, isLoggedIn } = useAuthUser();

// redirect to login if not logged in
if (!isLoggedIn()) router.replace({ name: "Login" });
</script>

<template>
  <div v-if="user">
    <div>Hello {{ user.user_metadata.name }}</div>
  </div>
</template>
