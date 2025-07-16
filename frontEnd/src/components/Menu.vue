<template>
    <div class="menu flex h-13 px-20 items-center">
        <h2 class="flex-2">LOGO</h2>
        <div>
            <ul class="flex flex-row flex-2">
                <li class="flex-2 menu-item"><router-link to="/">Inicial</router-link></li>
                <li class="flex-2 menu-item"><router-link to="/about">Tênis</router-link></li>
                <li class="flex-2 menu-item"><router-link to="/contact">Marcas</router-link></li>
                <li class="flex-2 menu-item"><router-link to="/contact">Sobre</router-link></li>
                <li class="flex-2 menu-item"><router-link to="/contact">Contact</router-link></li>
            </ul>
        </div>

        <div class="flex-1 p-5">
            <input class="border-2 w-md" type="text">
        </div>
        
        <div class="flex-none">
            <ul class="flex justify-end gap-5">
                <li class="menu-item" @click="showLogin = true">Login</li>
                <li class="menu-item">Login</li>
            </ul>
        </div>

        <Modal :show="showLogin" @close="showLogin = false" size="lg">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
            <form class="flex flex-col gap-4">
                <div>
                    <label class="block mb-1 text-sm font-medium text-gray-700">Email</label>
                    <input type="email" placeholder="seuemail@exemplo.com" class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                </div>

                <div>
                    <label class="block mb-1 text-sm font-medium text-gray-700">Senha</label>
                    <input :type="showPassoword ? 'password' : 'text' " placeholder="••••••••" class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    <span @click="showPassoword = !showPassoword" >
                        <i v-if="!showPassoword" class="fa-solid fa-eye-slash"></i>
                        <i v-else class="fa-solid fa-eye"></i>
                    </span>
                </div>

                <button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-semibold shadow">Entrar</button>
            </form>
            <p class="text-sm text-center text-gray-500 mt-6">
                Esqueceu sua senha?
                <a href="#" class="text-blue-600 hover:underline">Clique aqui</a>
            </p>
        </Modal>
    </div>
</template>

<script>
import HomePage from './HomePage.vue';

export default {
    name: 'Menu',


    data() {
        return {
            showLogin: false,
            showPassoword: true,
        };
    },

}
</script>