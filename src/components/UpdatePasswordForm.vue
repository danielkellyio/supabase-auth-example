<script setup>
import useAuthUser from "@/composables/UseAuthUser";
import { ref } from "vue";
const { update } = useAuthUser();
const password = ref("");

const updatePassword = async () => {
  await update({ password: password.value });
  alert(`Password updated`);
  password.value = "";
};
</script>
<template>
  <form class="mt-5 flex" @submit.prevent="updatePassword">
    <input
      v-model="password"
      class="w-auto rounded-tr-none rounded-br-none"
      placeholder="Password"
      type="password"
    />
    <button
      class="inline w-auto text-sm px-2 py-1 rounded-tl-none rounded-bl-none"
    >
      Update
    </button>
  </form>
</template>
