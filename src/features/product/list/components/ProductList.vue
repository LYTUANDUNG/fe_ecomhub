<script setup lang="ts">
import { ref } from "vue";
import ProductCard from "../components/ProductCard.vue"; 
import { ProductData } from "../../models/ProductItem"; 

const products = ref(ProductData.items);

const calculateAverageRating = (reviews) => {
  if (!reviews || reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  return (sum / reviews.length).toFixed(1);
};
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :src="product.images[0]?.uri || ''"
      :title="product.name"
      :price="product.price"
      :rating="calculateAverageRating(product.reviews)"
      :reviews="product.reviews?.length || 0"
      :minOrder="1" 
    />
  </div>
</template>