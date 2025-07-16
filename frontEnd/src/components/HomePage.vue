<template>
    <div class="homePage">
        <section class="banner text-white py-16 md:py-24">
            <div class="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-10 md:mb-0">
                    <h1 class="text-4xl md:text-5xl font-bold mb-4">Os melhores tênis do mercado</h1>
                    <p class="text-lg mb-6 text-gray-300">Encontre o par perfeito para seu estilo. Coleções exclusivas e lançamentos limitados.</p>
                    <div class="flex space-x-4">
                        <a href="#products" class="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300">Comprar Agora</a>
                        <a href="#new-arrivals" class="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition duration-300">Novidades</a>
                    </div>
                </div>
                <div class="md:w-1/2 flex justify-center">
                    <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-force-1-07-mens-shoes-jBrhbr.png" alt="Tênis Nike Air Force 1" class="w-full max-w-md transform rotate-6 hover:rotate-0 transition duration-500">
                </div>
            </div>
        </section>

        <div class="mt-15 mark">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12">Nossas Marcas</h2>
                <div class="grid grid-cols-2 md:grid-cols-5 gap-8">
                    <div class="mark-item flex justify-center items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300">
                        <img src="https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png" alt="Nike" class="h-12 object-contain">
                    </div>
                    <div class="mark-item flex justify-center items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300">
                        <img src="https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo.png" alt="Adidas" class="h-12 object-contain">
                    </div>
                    <div class="mark-item flex justify-center items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300">
                        <img src="https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo.png" alt="Puma" class="h-12 object-contain">
                    </div>
                    <div class="mark-item flex justify-center items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/New_Balance_logo.svg/2560px-New_Balance_logo.svg.png" alt="New Balance" class="h-12 object-contain">
                    </div>
                    <div class="mark-item flex justify-center items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Converse_logo.svg/2560px-Converse_logo.svg.png" alt="Converse" class="h-12 object-contain">
                    </div>
                </div>
            </div>
        </div>

        <ProductListSimple :products="featured?.items" />
        <ProductListSimple title="Novidades" :products="news" />
        
    </div>
</template>

<script>
import pb from '../pocketBase';
import ProductListSimple from './ProductListSimple.vue';
export default {
    name: 'HomePage',


    components: {
        ProductListSimple
    },

    data() {
        return {
            featured: {
                items: [],
                totalItems: 0,
                perPage: 50,
                page: 1
            },
            news: [
                {
                    id: 1,
                    title: 'Nike Air Force 1',
                    price: '799,90',
                    image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-force-1-07-mens-shoes-jBrhbr.png'
                },
                {
                    id: 2,
                    title: 'Nike Air Max 270 React',
                    price: '899,90',
                    image: 'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/spacetennis/media/uploads/produtos/foto/nkswtqvj/574.jpg'
                },
                {
                    id: 3,
                    title: 'Nike Air Max 270 React',
                    price: '659,90',
                    image: 'https://imgnike-a.akamaihd.net/1300x1300/028983IEA1.jpg'
                },
                {
                    id: 4,
                    title: 'Nike Air Max 270 React',
                    price: '379,90',
                    image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/5d42aa4c-6955-4e76-b0a4-523686dd4eac/NIKE+REVOLUTION+7.png'
                }
            ]
        }
    },


    async created() {
        await this.getProducts()
    },

    methods: {
        addToCart(event) {
            const button = event.target.closest('.add-to-cart');
            if (button) {
                const product = {
                    id: button.getAttribute('data-id'),
                    name: button.getAttribute('data-name'),
                    price: parseFloat(button.getAttribute('data-price')),
                    image: button.getAttribute('data-image')
                };
                this.$emit('add-to-cart', product);
            }
        },

         async getProducts() {
            try {
                const resultList = await pb.collection('Products').getList(1, 50, {
                    filter: 'featured = true',
                });
                this.featured = resultList
            } catch (err) {
                console.error('Erro ao buscar produtos:', err)
            }
        }
    }
}
</script>r