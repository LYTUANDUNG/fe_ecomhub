<script setup lang="ts">
import { ref } from "vue";
import ProductCard from "../components/ProductCard.vue"; 
import { ProductData } from "../../models/ProductItem";

// lấy data sản phẩm
const products = ref(ProductData.items);
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <ProductCard
      v-for="(item, index) in products"
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
