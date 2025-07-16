<template>
    <div class="products">
        <h1>{{ form.title }}</h1>
        <div class="carouselImages">
           <Carousel :items-to-show="2" gap="10" :wrap-around="true" :transition="500">
                <Slide>
                    <img :src="`http://127.0.0.1:8090/api/files/Products/${form.id}/${form.principal_image}`" alt="">
                </Slide>
                <Slide v-for="slide in form.images" :key="slide">
                    <img :src="`http://127.0.0.1:8090/api/files/Products/${form.id}/${slide}`" alt="">
               </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </div>
        <img :src="form.principal_image" alt="">
        <h1>ESTOU AQUI</h1>
        <h1>{{ form.title }}</h1>
        <h1>{{ form.price }}</h1>
    </div>
</template>

<script>
import collect from 'collect.js';
import pb from '../pocketBase';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
    name: 'Product',

    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation
    },

    props: {
        productID: null,
    },

    data() {
        return {
            form: {},
        };
    },

    async created() {
        await this.reload()
    },	

    methods: {
        async reload() {
            const productId = this.productID || this.$route.params.id;
            await pb.collection('Products').getList(1, 50, {
                filter: `id = '${productId}'`
            }).then(r => {
                this.form = collect(r.items).first();
            });
            
        }
    }
}
</script>