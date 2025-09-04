<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

defineProps({
  id: String,
  src: String,
  title: String,
  price: Number,
  rating: [Number, String],
  reviews: Number,
  minOrder: Number,
});
</script>

<template>
  <Card 
    class="product-card shadow-sm hover:shadow-md transition p-3"
    @click="$router.push(`/products/${id}`)"
  >
    <img :src="src" class="w-full h-48 object-contain mb-2" />
    <CardHeader class="p-0">
      <CardTitle class="text-sm font-semibold line-clamp-2 mt-1">{{ title }}</CardTitle>
      <CardDescription class="mt-1 text-lg font-bold">${{ price.toFixed(2) }}</CardDescription>
      <div class="flex items-center text-sm text-gray-600">
        ⭐ {{ rating }} ({{ reviews }} reviews)
      </div>
      <CardDescription class="text-xs text-gray-500">Min. order: {{ minOrder }} piece(s)</CardDescription>
    </CardHeader>
    <CardFooter class="p-0 mt-2">
      <Button class="w-full" variant="default">Add to Cart</Button>
    </CardFooter>
  </Card>
</template>

<style scoped>
.product-card {
  cursor: pointer;
  transition: all 0.2s ease;
}
.product-card:hover {
  transform: translateY(-2px);
}
</style>