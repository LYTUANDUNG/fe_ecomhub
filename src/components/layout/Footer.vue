<template>
  <footer class="bg-white border-t mt-8">
    <div class="max-w-6xl mx-auto p-4 text-center text-sm">
      © ECOMHUB - Skeleton - <span>{{ year }}</span>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
const year = new Date().getFullYear()
</script>
