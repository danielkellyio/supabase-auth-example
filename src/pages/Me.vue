<script setup>
import useAuthUser from "@/composables/UseAuthUser";
const { user } = useAuthUser();
</script>

<template>
  <div v-if="user">
    <div>Hello {{ user.user_metadata.name }}</div>
  </div>
</template>
