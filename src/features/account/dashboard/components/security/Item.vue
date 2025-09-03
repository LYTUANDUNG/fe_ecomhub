<script setup lang="ts">

import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

const {name, value, buttonText, isAlert, className} = defineProps({
  name: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    required: true
  },
  isAlert: {
    default: false,
  },
  className: {type: null, required: false},
})
</script>

<template>
  <div :class="cn('section', className)">
    <div class="flex items-start justify-center flex-col">
      <p class="font-bold">{{ name }}</p>
      <div class="flex items-center justify-center">
        <div v-if="isAlert" class="mr-2 text-yellow-500">⚠️</div>
        <p>{{ value }}</p>
      </div>
    </div>
    <Button class="w-20 border-gray-500" variant="outline">
      {{ buttonText }}
    </Button>
  </div>
</template>

<style scoped>
.section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 1rem;
}
</style>