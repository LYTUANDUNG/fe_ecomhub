<template>
  <div class="cart-summary">
    <p>
      Subtotal ({{ items.length }} items):
      <strong>${{ total.toFixed(2) }}</strong>
    </p>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  items: Array,
});

const total = computed(() =>
    props.items.reduce((sum, i) => sum + i.price * i.quantity, 0)
);
</script>
