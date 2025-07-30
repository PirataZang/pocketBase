// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import pb from './pocketBase' // PocketBase

// Estilos
import './styles/default.scss'
import './styles/tailwind.css'

// Carrossel de imagens
import 'vue3-carousel/carousel.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

// Componentes globais e API
import api from './api'
import Modal from './components/utils/Modal.vue'
import Product from './components/Product.vue'

const app = createApp(App)

// #########################
// ### GLOBAL PROPERTIES ###
// #########################
app.config.globalProperties.$api = api
app.config.globalProperties.$pb = pb // 👈 Agora o pb tá global!

// ########################
// ### GLOBAL COMPONENTS ###
// ########################
app.component('Modal', Modal)
app.component('Product', Product)

// ##################
// ### DIRECTIVES ###
// ##################
app.directive('focus', {
    mounted(el) {
        el.focus()
    }
})

app.directive('hidden', {
    mounted(el) {
        el.style.display = 'none'
    }
})

app.directive('disabled', {
    mounted(el) {
        el.disabled = true
    }
})

// Finaliza
app.use(router).mount('#app')
