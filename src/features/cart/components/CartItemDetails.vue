<template>
  <div class="cart-item-details">
    <div class="cart-item-title">{{ item.title }}</div>
    <div class="cart-item-stock">In Stock</div>
    <label class="cart-item-gift">
      <input type="checkbox" /> This is a gift
    </label>

    <!-- Actions nằm ngay dưới gift -->
    <CartItemActions :item="item" />
  </div>
</template>

<script setup>
import CartItemActions from "./CartItemActions.vue";

defineProps({
  item: Object,
});
</script>
