<template>
  <div class="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
    <CartActionLink label="Delete" />
    <CartActionLink label="Save for later" />
    <CartActionLink label="Compare with similar items" />
    <CartActionLink label="Share" />
  </div>
</template>

<script setup>
import CartActionLink from "./CartActionLink.vue";
</script>
