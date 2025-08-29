<script setup lang="ts">
import { ref } from "vue";

const sortOption = ref("default");
const emit = defineEmits(["updateSort"]);

const updateSort = (option) => {
  emit("updateSort", option);
};
</script>

<template>
  <div class="bg-gray-100 px-3 py-1 rounded">
    <select
      v-model="sortOption"
      @change="updateSort(sortOption)"
      class="bg-transparent border-none focus:outline-none"
    >
      <option value="default" disabled>Sort by</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="rating">Rating</option>
    </select>
  </div>
</template>