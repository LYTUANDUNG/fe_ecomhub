import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import NotFound from '@/pages/NotFound.vue'
import ProductListingPage from "@/features/product/list/components/ProductList.vue"
import ProductDetailPage from "@/features/product/detail/pages/ProductDetailPage.vue"

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/products', name: 'Products', component: ProductListingPage },
  { path: '/products/:id', name: 'ProductDetail', component: ProductDetailPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
