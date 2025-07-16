// src/main.js
import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import router from './router'


// Estilos
import './styles/default.scss'
import './styles/tailwind.css'


// Carrossel de imagens
import 'vue3-carousel/carousel.css'

import '@fortawesome/fontawesome-free/css/all.min.css'


// Componentes Globais
import api from './api';


// Componentes
import Modal from './components/utils/Modal.vue'
import Product from './components/Product.vue'

const app = createApp(App)

// #########################
// ### GLOBAL COMPONENTS ###
// #########################
app.config.globalProperties.$api = api;

app.component('Modal', Modal);
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

app.use(router).mount('#app')
