<template>
  <div class="cart-item-image">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script setup>
defineProps({
  src: String,
  alt: String,
});
</script>
