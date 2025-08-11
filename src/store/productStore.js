import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('product', () => {
  const products = ref([])
  function setProducts(list) { products.value = list }
  return { products, setProducts }
})
