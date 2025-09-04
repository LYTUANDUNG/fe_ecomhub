<script setup>
const props = defineProps({
  label: { type: String, required: true },
  value: { type: String, required: true },
  strong: { type: Boolean, default: false },
});
</script>

<template>
  <div class="flex justify-between" :class="strong ? 'text-base font-bold' : 'text-sm'">
    <span>{{ label }}</span>
    <span>{{ value }}</span>
  </div>
</template>
