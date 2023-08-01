<template>
  <DefaultHeader />
  <div class="body-container">
    <slot />
  </div>
  <!-- <DefaultFooter /> -->
</template>

<script lang="ts" setup>
import { DefaultHeader } from "../components/layout/index";
</script>
<style scoped>
.body-container {
  min-height: calc(100vh - 252px);
  margin-top: 83px;
}
</style>
