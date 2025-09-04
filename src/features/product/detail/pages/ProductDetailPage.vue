<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { ProductData } from "../../models/ProductItem";
import { Button } from "@/components/ui/button";

const route = useRoute();
const productId = route.params.id;
const product = ref(ProductData.items.find(p => p.id === productId) || null);
const mainImage = ref(product.value?.images[0]?.uri || '');
const quantity = ref(1);
const addGiftReceipt = ref(false);

const averageRating = computed(() => {
  if (!product.value || !product.value.reviews || product.value.reviews.length === 0) return 'No ratings';
  const sum = product.value.reviews.reduce((acc, r) => acc + r.rating, 0);
  return (sum / product.value.reviews.length).toFixed(1);
});

const reviewCount = computed(() => product.value?.reviews?.length || 0);

const setMainImage = (uri) => {
  mainImage.value = uri;
};
</script>

<template>
  <div v-if="product" class="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Hình ảnh chính -->
    <div class="flex flex-col gap-4">
      <img :src="mainImage" class="w-full h-80 object-contain border rounded-lg" />
      <div class="flex gap-2">
        <img v-for="(img, index) in product.images" :key="index" :src="img.uri" class="w-20 h-20 border rounded object-contain cursor-pointer" @click="setMainImage(img.uri)" />
      </div>
    </div>

    <!-- Thông tin sản phẩm -->
    <div class="flex flex-col gap-3">
      <h1 class="text-2xl font-bold">{{ product.name }}</h1>
      <div class="flex items-center text-yellow-500 text-sm">
        ⭐ {{ averageRating }} <span class="ml-2 text-gray-600">({{ reviewCount }} reviews)</span>
      </div>
      <p class="text-3xl font-semibold text-green-600">${{ product.price.toFixed(2) }}</p>
      <p class="text-sm text-gray-500">Category: {{ product.categoryId }}</p>
      <p class="text-sm text-gray-500">Status: {{ product.status }}</p>

      <!-- Variants section -->
      <div v-if="product.variants && product.variants.length > 0" class="mt-4">
        <h2 class="text-lg font-semibold">Variants</h2>
        <ul class="list-disc pl-5">
          <li v-for="variant in product.variants" :key="variant.id">
            SKU: {{ variant.sku }} - Price: ${{ variant.price.toFixed(2) }} - Stock: {{ variant.stock }} - Status: {{ variant.variantStatus }}
          </li>
        </ul>
      </div>

      <!-- Placeholder for shipping/delivery -->
      <p class="text-sm text-gray-500">$52.16 Shipping & Import Charges to Vietnam</p>
      <p class="text-sm text-gray-500">Delivery: Tuesday, October 7</p>

      <div class="mt-4 flex gap-3">
        <select v-model="quantity" class="border p-2 rounded">
          <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
        </select>
        <Button class="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black">Add to Cart</Button>
        <Button class="flex-1 bg-orange-500 hover:bg-orange-600 text-white">Buy Now</Button>
      </div>
      <div class="mt-2">
        <input type="checkbox" id="giftReceipt" v-model="addGiftReceipt">
        <label for="giftReceipt" class="ml-2 text-sm">Add a gift receipt for easy returns</label>
        <Button class="mt-2 w-full" variant="outline">Add to List</Button>
      </div>
    </div>
  </div>

  <div v-else class="p-6 text-center text-gray-500">Product not found</div>
</template>