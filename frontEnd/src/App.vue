<template>
  <div id="app" class="app-container">
    <Menu />
    
    <main class="main-content">
      <router-view />
    </main>

    <footer class="bg-gray-900 text-white py-12">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div class="flex items-center space-x-2 mb-4">
                        <i class="fas fa-shoe-prints text-2xl text-indigo-400"></i>
                        <span class="text-xl font-bold">KicksHub</span>
                    </div>
                    <p class="text-gray-400">A melhor seleção de tênis premium para os verdadeiros entusiastas.</p>
                    <div class="flex space-x-4 mt-6">
                        <a href="#" class="text-gray-400 hover:text-white">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-white">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h3 class="font-bold text-lg mb-4">Links Úteis</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white">Início</a></li>
                        <li><a href="#products" class="text-gray-400 hover:text-white">Tênis</a></li>
                        <li><a href="#brands" class="text-gray-400 hover:text-white">Marcas</a></li>
                        <li><a href="#about" class="text-gray-400 hover:text-white">Sobre</a></li>
                        <li><a href="#contact" class="text-gray-400 hover:text-white">Contato</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="font-bold text-lg mb-4">Ajuda</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white">FAQ</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Política de Devolução</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Termos de Serviço</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Política de Privacidade</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Rastrear Pedido</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="font-bold text-lg mb-4">Pagamento</h3>
                    <div class="grid grid-cols-3 gap-2">
                        <div class="bg-white p-2 rounded flex items-center justify-center">
                            <img src="https://logodownload.org/wp-content/uploads/2014/10/visa-logo-1.png" alt="Visa" class="h-6">
                        </div>
                        <div class="bg-white p-2 rounded flex items-center justify-center">
                            <img src="https://logodownload.org/wp-content/uploads/2014/10/mastercard-logo-3.png" alt="Mastercard" class="h-6">
                        </div>
                        <div class="bg-white p-2 rounded flex items-center justify-center">
                            <img src="https://logodownload.org/wp-content/uploads/2014/10/amex-american-express-logo-1.png" alt="American Express" class="h-6">
                        </div>
                        <div class="bg-white p-2 rounded flex items-center justify-center">
                            <img src="https://logodownload.org/wp-content/uploads/2014/10/paypal-logo-1.png" alt="PayPal" class="h-6">
                        </div>
                        <div class="bg-white p-2 rounded flex items-center justify-center">
                            <img src="https://logodownload.org/wp-content/uploads/2019/08/pix-logo-banco-central.png" alt="Pix" class="h-6">
                        </div>
                        <div class="bg-white p-2 rounded flex items-center justify-center">
                            <img src="https://logodownload.org/wp-content/uploads/2019/08/boleto-logo.png" alt="Boleto" class="h-6">
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                <p>© 2023 KicksHub. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Menu from './components/Menu.vue';


components: {
  Menu
}
</script>
