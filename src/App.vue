<template>
  <div class="p-6 text-center">
    <h1 class="text-2xl font-bold text-blue-600">Welcome to ECOMHUB</h1>
    <Button @click="count++">Clicked {{ count }} times</Button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Button } from 'shadcn-vue'
const count = ref(0)
</script>