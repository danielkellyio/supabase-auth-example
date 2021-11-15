<script setup>
import { useRouter, useRoute } from "vue-router";
import useAuthUser from "@/composables/UseAuthUser";
import UpdateEmailForm from "@/components/UpdateEmailForm.vue";
import UpdatePasswordForm from "@/components/UpdatePasswordForm.vue";

// use necessary composables
const route = useRoute();
const router = useRouter();
const { user, isLoggedIn } = useAuthUser();

// redirect to login if not logged in
if (!isLoggedIn()) router.replace({ name: "Login" });
</script>
<template>
  <div v-if="user">
    <div>Hello {{ user.user_metadata.name }}</div>
    <div class="text-sm">
      <router-link to="#email" class="text-blue-700">Edit Email</router-link> |
      <router-link to="#password" class="text-blue-700">
        Edit Password
      </router-link>
    </div>
    <component
      :is="
        route.hash.replace('#', '') === 'email'
          ? UpdateEmailForm
          : UpdatePasswordForm
      "
      v-if="$route.hash"
    />
  </div>
</template>
