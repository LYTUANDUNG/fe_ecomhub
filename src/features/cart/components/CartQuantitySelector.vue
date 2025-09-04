<template>
  <div class="quantity-selector">
    <button @click="decrease">-</button>
    <span>{{ modelValue }}</span>
    <button @click="increase">+</button>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: Number,
});
const emit = defineEmits(["update:modelValue"]);

const decrease = () => {
  if (props.modelValue > 1) {
    emit("update:modelValue", props.modelValue - 1);
  }
};
const increase = () => {
  emit("update:modelValue", props.modelValue + 1);
};
</script>
