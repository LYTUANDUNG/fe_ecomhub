<script setup>
import OrderSummary from '../components/OrderSummary.vue';

// dữ liệu mẫu
const orderData = {
  subtotal: 1200000,
  shipping: 30000,
  discount: 50000,
  taxRate: 0.1,
  currency: 'VND',
  loading: false,
  buttonText: 'Đặt hàng ngay',
};

const handleSubmit = () => {
  alert('Đơn hàng đã được gửi!');
};
</script>

<template>
  <main class="min-h-screen flex justify-center items-start bg-gray-50 p-6">
    <OrderSummary v-bind="orderData" @submit="handleSubmit" />
  </main>
</template>
