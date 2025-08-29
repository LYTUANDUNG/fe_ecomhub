import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import NotFound from '@/pages/NotFound.vue'
import ProductListingPage from "@/features/product/list/components/ProductListPage.vue";

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: "/products", component: ProductListingPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

