<script setup lang="ts">

defineProps({
  title: {
    type: String,
    required: true
  },
})
</script>

<template>
  <div class="mb-3">
    <h1 class="text-3xl">{{ title }}</h1>
  </div>
</template>

<style scoped>

</style>