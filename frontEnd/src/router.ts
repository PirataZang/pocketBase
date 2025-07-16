// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import Product from './components/Product.vue'

const routes: any = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/product/:id', name: 'Product', component: Product },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
