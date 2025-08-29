<script setup lang="ts">
import ProductList from "../components/ProductList.vue"; 
import ProductFilter from "../components/ProductFilter.vue"; 
import ProductSort from "../components/ProductSort.vue";
</script>

<template>
  <div class="listing-page grid grid-cols-4 gap-6">
    <!-- Sidebar -->
    <aside class="col-span-1">
      <ProductFilter />
    </aside>

    <!-- Main Content -->
    <main class="col-span-3">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-xl font-bold">Results</h1>
        <ProductSort @updateSort="ProductList.updateSort" />
      </div>
      <p class="text-sm text-gray-500 mb-2">Ranked by orders in the past 90 days</p>
      <ProductList />
    </main>
  </div>
</template>

<style scoped>
.listing-page {
  padding: 14px 18px;
}
</style>