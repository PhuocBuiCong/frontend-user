<template>
  <DefaultHeader />
  <div class="body-container">
    <slot />
  </div>
  <!-- <DefaultFooter /> -->
</template>

<script lang="ts" setup>
import {  DefaultHeader } from '~/components/layout/default'

</script>
<style lang="scss" scoped>
.body-container {
  min-height: calc(100vh - 252px);
  @include sp {
    min-height: -moz-available;
  }
}
</style>
