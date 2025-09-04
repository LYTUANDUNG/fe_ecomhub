<script setup>
import OrderRow from './OrderRow.vue';

const props = defineProps({
  total: { type: Number, required: true },
  format: { type: Function, required: true },
});
</script>

<template>
  <OrderRow label="Tổng cộng" :value="format(total)" strong />
</template>
