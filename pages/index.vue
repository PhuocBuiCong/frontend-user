<!-- components/LogInForm.vue -->
<template>
  <div>Home Page</div>
  <div>{{ state.test }}</div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "default",
});

const { initHome, state } = useHomeStore();
onMounted(() => {
  initHome();
});
</script>
