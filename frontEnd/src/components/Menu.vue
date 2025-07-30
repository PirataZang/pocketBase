<template>
    <div class="menu flex h-13 px-20 items-center">
        <div class="flex-1 items-center space-x-2">
            <i class="fas fa-shoe-prints text-2xl text-indigo-400"></i>
            <span class="text-xl font-bold">KicksHub</span>
        </div>
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
            <input v-model="searchShoes" class="border-2 w-md" type="text">
        </div>
        
        <div v-if="!isLogin" class="flex-none">
            <ul class="flex justify-end gap-5">
                <li class="menu-item" @click="showLogin = true">Login</li>
                <li class="menu-item" @click="showRegister = true" >Registrar-se</li>
            </ul>
        </div>

        <div v-if="isLogin" class="flex flex-row items-center justify-around">
            <ul class="flex items-center justify-end gap-5">
                <li class="menu-item text-sm">Olá <b>{{this.userName}}</b></li>
                <div class="flex items-center gap-2">
                    <li>
                        <router-link to="/cart" class="text-gray-800 hover:text-blue-600 transition duration-200">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </router-link>
                    </li>
                    <li class="menu-item padding" @click="logout">Logout</li>
                </div>
            </ul>
        </div>

        <div>
            <Modal :show="showLogin" @close="showLogin = false" size="lg">
                <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
                <form autocomplete="on" class="flex flex-col gap-4" @submit.prevent="login">
                    <div>
                        <label class="block mb-1 text-sm font-medium text-gray-700">Email</label>
                        <input autocomplete="username" name="email" v-model="data.email" type="email" placeholder="seuemail@exemplo.com" class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>

                    <div>
                        <label class="block mb-1 text-sm font-medium text-gray-700">Senha</label>
                        <div class="relative">
                            <input name="password" autocomplete="current-password" v-model="data.password" :type="showPassword ? 'password' : 'text'" placeholder="••••••••" class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"/>
                            <span class="absolute right-3 top-2.5 text-gray-500 cursor-pointer" @click="showPassword = !showPassword">
                                <i v-if="!showPassword" class="fa-solid fa-eye-slash"></i>
                                <i v-else class="fa-solid fa-eye"></i>
                            </span>
                        </div>
                    </div>

                    <button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-semibold shadow">
                        Entrar
                    </button>
                </form>

                <p class="text-sm text-center text-gray-500 mt-6">
                    Esqueceu sua senha?
                    <a href="#" class="text-blue-600 hover:underline">Clique aqui</a>
                </p>
            </Modal>
    
            <Modal :show="showRegister" @close="showRegister = false" size="lg">
                <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">Cadastre-se aqui</h2>
                <form @submit.prevent="register" autocomplete="on" class="flex flex-col gap-4">
                    <div>
                        <label for="email" class="block mb-1 text-sm font-medium text-gray-700">Email</label>
                        <input 
                            id="email" 
                            name="email" 
                            type="email" 
                            v-model="data.email" 
                            placeholder="seuemail@exemplo.com" 
                            autocomplete="email"
                            required
                            class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label for="name" class="block mb-1 text-sm font-medium text-gray-700">Nome Completo</label>
                        <input 
                            id="name" 
                            name="name" 
                            type="text" 
                            v-model="data.name" 
                            placeholder="João Silva" 
                            autocomplete="name"
                            required
                            class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label for="password" class="block mb-1 text-sm font-medium text-gray-700">Senha</label>
                        <div class="relative">
                            <input 
                                id="password" 
                                name="password" 
                                v-model="data.password" 
                                :type="showPassword ? 'text' : 'password'" 
                                placeholder="••••••••" 
                                autocomplete="new-password"
                                required
                                class="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <span 
                                @click="showPassword = !showPassword"
                                class="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                            >
                                <i :class="showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'"></i>
                            </span>
                        </div>
                    </div>

                    <div>
                        <label for="passwordConfirm" class="block mb-1 text-sm font-medium text-gray-700">Confirmar Senha</label>
                        <input 
                            id="passwordConfirm" 
                            name="passwordConfirm" 
                            v-model="data.passwordConfirm" 
                            :type="showPassword ? 'text' : 'password'" 
                            placeholder="••••••••" 
                            autocomplete="new-password"
                            required
                            class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <button 
                        type="submit"
                        class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 font-semibold shadow"
                    >
                        Cadastrar
                    </button>
                </form>
            </Modal>
        </div>

    </div>
</template>

<script>
import HomePage from './HomePage.vue';

export default {
    name: 'Menu',


    data() {
        return {
            showLogin: false,
            showRegister: false,
            showPassword: true,
            userName: this.$pb.authStore.model.name,

            isLogin: this.$pb.authStore.isValid,
            
            searchShoes: '',

            data: {
                email: '',
                name: '',
                password: '',
                passwordConfirm: '',
            },
        };
    },

    methods: {
        async login() {
            try {
                await this.$pb.collection('clients').authWithPassword(this.data.email, this.data.password);
                this.isLogin = true;
                this.showLogin = false;
                this.data = null; // Limpa os dados do formulário
                
                debugger
                this.userName = this.$pb.authStore.model.name || this.data.email; // Define o nome do usuário logado
            } catch (error) {
                alert('Erro ao fazer login: Verifique suas credenciais e tente novamente.');
            }
        },

        async logout() {
            try {
                this.$pb.authStore.clear();
                this.isLogin = false;
                this.$router.push('/');
            } catch (error) {
                console.error('Logout failed:', error);
            }
        },

        async register() {
            if (!this.data.email || !this.data.name || !this.data.password || !this.data.passwordConfirm) {
                alert('Preencha todos os campos!');
                return false;
            }

            if (this.data.password !== this.data.passwordConfirm) {
                alert('As senhas não coincidem!');
                return;
            }

            try {
                const data = {
                    email: this.data.email,
                    emailVisibility: true, // deixa o email visível no perfil público
                    name: this.data.name,
                    password: this.data.password,
                    passwordConfirm: this.data.passwordConfirm
                };

                const record = await this.$pb.collection('clients').create(data);
                
                alert('Cadastro realizado com sucesso!');
                this.showRegister = false;

                // (opcional) Já loga o usuário após cadastro:
                await this.$pb.collection('clients').authWithPassword(this.data.email, this.data.password);
                this.isLogin = true;

                this.data = null; // Limpa os dados do formulário
                this.$router.push('/');

            } catch (error) {
                console.error('Registration failed:', error);
                alert('Erro ao cadastrar: ' + error.message);
            }
        }
    }

}
</script>