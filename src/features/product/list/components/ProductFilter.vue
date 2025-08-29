<script setup lang="ts">
import { ref } from "vue";

const selectedCategory = ref("all");

const filterProducts = (category) => {
  selectedCategory.value = category;
  // Logic filter (giả lập)
  console.log("Filtering by:", category);
};
</script>

<template>
  <div class="bg-gray-100 p-4 rounded">
    <h3 class="text-md font-semibold mb-2">Filter by Category</h3>
    <div class="space-y-2">
      <label class="flex items-center">
        <input
          type="radio"
          v-model="selectedCategory"
          value="all"
          @change="filterProducts('all')"
          class="mr-2"
        />
        All
      </label>
      <label class="flex items-center">
        <input
          type="radio"
          v-model="selectedCategory"
          value="Accessories"
          @change="filterProducts('Accessories')"
          class="mr-2"
        />
        Accessories
      </label>
      <label class="flex items-center">
        <input
          type="radio"
          v-model="selectedCategory"
          value="Bags"
          @change="filterProducts('Bags')"
          class="mr-2"
        />
        Bags
      </label>
      <label class="flex items-center">
        <input
          type="radio"
          v-model="selectedCategory"
          value="Metal"
          @change="filterProducts('Metal')"
          class="mr-2"
        />
        Metal
      </label>
    </div>
  </div>
</template>