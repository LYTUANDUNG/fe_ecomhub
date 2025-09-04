<template>
  <div class="cart-item">
    <CartItemImage :src="item.image" :alt="item.title" />
    <CartItemDetails :item="item" />
  </div>
</template>

<script setup>
import CartItemImage from "./CartItemImage.vue";
import CartItemDetails from "./CartItemDetails.vue";

defineProps({
  item: Object,
});
</script>

<style src="../styles/CartItem.css"></style>
