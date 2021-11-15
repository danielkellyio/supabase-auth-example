<script setup>
defineProps({
  message: { type: String, required: true },
});
</script>
<template>
  <p>
    {{ message }}
  </p>
</template>
