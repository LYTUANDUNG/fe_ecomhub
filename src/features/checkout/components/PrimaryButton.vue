<script setup>
const props = defineProps({
  label: { type: String, required: true },
  loading: { type: Boolean, default: false },
  type: { type: String, default: 'button' },
});

const emit = defineEmits(['click']);
const handleClick = (e) => {
  if (!props.loading) emit('click', e);
};
</script>

<template>
  <button
      :type="type"
      class="w-full py-3 px-4 rounded-xl font-semibold text-white bg-green-600 hover:bg-green-700 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
      :disabled="loading"
      @click="handleClick"
  >
    <span v-if="!loading">{{ label }}</span>
    <span v-else>Đang xử lý…</span>
  </button>
</template>
