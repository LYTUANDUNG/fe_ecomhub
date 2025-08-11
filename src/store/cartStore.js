import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  function add(item) { items.value.push(item) }
  return { items, add }
})
