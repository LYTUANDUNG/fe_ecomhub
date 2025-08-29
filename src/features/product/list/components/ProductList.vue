<script setup lang="ts">
import { ref, computed } from "vue";
import ProductCard from "../components/ProductCard.vue"; 
import { ProductData } from "../../models/ProductItem";

const products = ref(ProductData.items);
const sortOption = ref("default");

const sortedProducts = computed(() => {
  return [...products.value].sort((a, b) => {
    if (sortOption.value === "price-asc") return a.price - b.price;
    if (sortOption.value === "price-desc") return b.price - a.price;
    if (sortOption.value === "rating") return b.rating - a.rating;
    return 0;
  });
});

const updateSort = (option) => {
  sortOption.value = option;
};
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <ProductCard
      v-for="(item, index) in sortedProducts"
      :key="index"
      :src="item.src"
      :title="item.title"
      :price="item.price"
      :rating="item.rating"
      :reviews="item.reviews"
      :badge="item.badge"
      :minOrder="item.minOrder"
    />
  </div>
</template>