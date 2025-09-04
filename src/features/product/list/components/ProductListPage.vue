<script setup lang="ts">
import ProductList from "../components/ProductList.vue"; 
</script>

<template>
  <div class="listing-page">
    <h1 class="text-xl font-bold mb-4">Products</h1>
    <p class="text-sm text-gray-500 mb-2">Ranked by orders in the past 90 days</p>
    <ProductList />
  </div>
</template>

<style scoped>
.listing-page {
  padding: 14px 18px;
}
</style>