<script setup>
import useAuthUser from "@/composables/UseAuthUser";
import { ref } from "vue";
const { user, update } = useAuthUser();
const email = ref(user.value.email);

const updateEmail = async () => {
  await update({ email: email.value });
  alert(`Please confirm change of email sent to ${user.value.email}`);
  email.value = "";
};
</script>
<template>
  <form class="mt-5 flex" @submit.prevent="updateEmail">
    <input
      v-model="email"
      class="w-auto rounded-tr-none rounded-br-none"
      placeholder="Email"
    />
    <button
      class="inline w-auto text-sm px-2 py-1 rounded-tl-none rounded-bl-none"
    >
      Update
    </button>
  </form>
</template>
