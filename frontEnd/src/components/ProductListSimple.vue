<template>
    <div class="productSimpleList gap-5 pt-3">
        <h2 class="text-2xl"><b>{{title}}</b></h2>
        <div class="gap-10 product-list">
            <div v-for="product in products" :key="product?.id" class="product-item">
                <router-link :to="`product/${product.id}`">
                    <div class="flex w-full justify-center">
                        <img class="product-image" :src="`http://127.0.0.1:8090/api/files/Products/${product.id}/${product?.principal_image}`" alt="Tênis Nike Air Force 1">
                    </div>
                    <div class="details">
                        <h3><b>{{product?.title}}</b></h3>
                        <p> R$ {{ product?.amount_descount ?? product?.amount }}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import collect from 'collect.js';

export default {
    name: 'ProductListSimple',

    props: {
        title: {
            type: String,
            default: 'Destaques'
        },	

        products: {
            type: Array,
        }
    },
}
</script>