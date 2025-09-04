<template>
  <div class="cart-container">
    <h1 class="cart-title">Shopping Cart</h1>
    <div v-for="item in cartItems" :key="item.id">
      <CartItem :item="item" />
    </div>
    <CartSummary :items="cartItems" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CartItem from "../components/CartItem.vue";
import CartSummary from "../components/CartSummary.vue";

const cartItems = ref([
  {
    id: 1,
    title: "ASUS ROG Strix G16 (2025) Gaming Laptop, 16” FHD+ ...",
    price: 1274.99,
    oldPrice: 1499.99,
    discount: "15% off Limited time deal",
    inStock: true,
    image: "https://via.placeholder.com/150x100?text=Laptop",
    isGift: false,
    quantity: 1,
  },
  {
    id: 2,
    title:
        "Reusable Grocery Bags (3 Pack) – Heavy Duty Reusable Shopping Bags...",
    price: 28.99,
    inStock: true,
    image: "https://via.placeholder.com/150x100?text=Bags",
    isGift: false,
    quantity: 1,
  },
]);
</script>

<style src="../styles/Cart.css"></style>
