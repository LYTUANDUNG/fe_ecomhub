<template>
  <div class="cart-item-actions">
    <CartQuantitySelector v-model="quantity" />
    <CartActionLinks />
    <div class="cart-item-price">
      <span class="price-current">${{ item.price.toFixed(2) }}</span>
      <span v-if="item.oldPrice" class="price-old">${{ item.oldPrice.toFixed(2) }}</span>
      <span v-if="item.discount" class="price-discount">{{ item.discount }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CartQuantitySelector from "./CartQuantitySelector.vue";
import CartActionLinks from "./CartActionLinks.vue";

defineProps({
  item: Object,
});

const quantity = ref(1);
</script>
