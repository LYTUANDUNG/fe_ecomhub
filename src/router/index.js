import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import NotFound from '@/pages/NotFound.vue'
import {DashboardPage, SecurityPage} from "@/features/account/dashboard";

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/account/dashboard', name: 'AccountDashboard', component: DashboardPage},
    {path: '/account/dashboard/security', name: 'Security', component: SecurityPage},
    {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router

