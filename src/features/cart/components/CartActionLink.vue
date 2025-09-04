<template>
  <a
      href="#"
      class="text-blue-600 hover:text-blue-800 font-medium underline underline-offset-2 transition duration-200"
  >
    {{ label }}
  </a>
</template>

<script setup>
defineProps({
  label: String,
});
</script>
