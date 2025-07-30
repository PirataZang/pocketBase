<template>
    <div class="products">
        <div class="productsInfo">
            <div class="informations details">
                <h1 class="title" v-html="form.title"></h1>

                <ul class="detailsList">
                    <h1 class="title detailText"> Detalhes do Produto </h1>
                    <li class="detailItem" v-if="form.gender">Gênero: {{ form.gender }}</li>
                    <li class="detailItem" v-if="form.composition">Composição: {{ form.composition }}</li>
                    <li class="detailItem" v-if="form.meterial">Material: {{ form.meterial }}</li>
                    <li class="detailItem" v-if="form.origin">Origem: {{ form.origin }}</li>
                </ul>

                <div class="flex flex-col">
                    <span class="title detailText">detalhes</span>
                    <span class="detailItem">{{ form?.details }}</span>
                </div>

                <span class="showSize" @click="showSize = !showSize">Exibir Tamanhos...</span>

                <div v-if="showSize" class="sizeInfo">
                    <section>
                        <div class="sizeTable">
                            <!-- Coluna 1 -->
                            <table>
                                <thead>
                                    <tr>
                                        <th class="sizeTd">BR</th>
                                        <th class="sizeTd">Tamanho (CM)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">19</td>
                                        <td class="sizeTd">12,7 a 13,2</td>
                                    </tr>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">20</td>
                                        <td class="sizeTd">13,3 a 13,7</td>
                                    </tr>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">21</td>
                                        <td class="sizeTd">13,8 a 14,2</td>
                                    </tr>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">22</td>
                                        <td class="sizeTd">14,3 a 14,8</td>
                                    </tr>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">23</td>
                                        <td class="sizeTd">14,9 a 15,5</td>
                                    </tr>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">24</td>
                                        <td class="sizeTd">15,6 a 16,2</td>
                                    </tr>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">25</td>
                                        <td class="sizeTd">16,3 a 16,8</td>
                                    </tr>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">26</td>
                                        <td class="sizeTd">16,9 a 17,7</td>
                                    </tr>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">27</td>
                                        <td class="sizeTd">17,8 a 18,3</td>
                                    </tr>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">28</td>
                                        <td class="sizeTd">18,4 a 18,9</td>
                                    </tr>
                                </tbody>
                            </table>

                            <!-- Coluna 2 -->
                            <table>
                                <thead>
                                    <tr>
                                        <th class="sizeTd">BR</th>
                                        <th class="sizeTd">Tamanho (CM)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">29</td>
                                        <td class="sizeTd">19,0 a 19,7</td>
                                    </tr>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">30</td>
                                        <td class="sizeTd">19,8 a 20,3</td>
                                    </tr>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">31</td>
                                        <td class="sizeTd">20,4 a 20,9</td>
                                    </tr>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">32</td>
                                        <td class="sizeTd">21,0 a 21,5</td>
                                    </tr>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">33</td>
                                        <td class="sizeTd">21,6 a 22,1</td>
                                    </tr>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">34</td>
                                        <td class="sizeTd">22,2 a 22,7</td>
                                    </tr>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">35</td>
                                        <td class="sizeTd">22,8 a 23,5</td>
                                    </tr>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">36</td>
                                        <td class="sizeTd">23,6 a 24,1</td>
                                    </tr>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">37</td>
                                        <td class="sizeTd">24,2 a 24,8</td>
                                    </tr>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">38</td>
                                        <td class="sizeTd">24,9 a 25,5</td>
                                    </tr>
                                </tbody>
                            </table>

                            <!-- Coluna 3 -->
                            <table>
                                <thead>
                                    <tr>
                                        <th class="sizeTd">BR</th>
                                        <th class="sizeTd">Tamanho (CM)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">39</td>
                                        <td class="sizeTd">25,6 a 26,3</td>
                                    </tr>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">40</td>
                                        <td class="sizeTd">26,4 a 27,0</td>
                                    </tr>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">41</td>
                                        <td class="sizeTd">27,1 a 27,6</td>
                                    </tr>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">42</td>
                                        <td class="sizeTd">27,7 a 28,3</td>
                                    </tr>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">43</td>
                                        <td class="sizeTd">28,4 a 28,9</td>
                                    </tr>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">44</td>
                                        <td class="sizeTd">29,0 a 29,6</td>
                                    </tr>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">45</td>
                                        <td class="sizeTd">29,7 a 30,2</td>
                                    </tr>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">46</td>
                                        <td class="sizeTd">30,3 a 30,9</td>
                                    </tr>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">47</td>
                                        <td class="sizeTd">31,0 a 31,5</td>
                                    </tr>
                                    <tr class="sizeTr">
                                        <td class="sizeTd">48</td>
                                        <td class="sizeTd">31,6 a 32,2</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </section>
                </div>
            </div>

            <div class="carouselImages">
                <Carousel :items-to-show="2" gap="10" :wrap-around="true" :transition="500">
                    <Slide>
                        <img :src="`http://127.0.0.1:8090/api/files/Products/${form.id}/${form.principal_image}`"
                            alt="" />
                    </Slide>
                    <Slide v-for="slide in form.images" :key="slide">
                        <img :src="`http://127.0.0.1:8090/api/files/Products/${form.id}/${slide}`" alt="" />
                    </Slide>
                    <template #addons>
                        <Navigation />
                    </template>
                </Carousel>
            </div>

            <div class="informations prices">
                <h1> R$ {{ form.amount }}</h1>
                <h1> R$ {{ form.amount_descount }}</h1>
                <span>Em até 12x de R$ {{ (Number(form.amount_descount ?? form.amount) / 12).toFixed(2) }}</span>
            </div>
        </div>

        <hr>
        <br>
        <h2>Descrição do Produto</h2>
        <div class="desc">
            <span>{{ form.description }}</span>
        </div>
    </div>
</template>

<script>
import collect from 'collect.js'
import pb from '../pocketBase'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
    name: 'Product',

    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },

    props: {
        productID: null,
    },

    data() {
        return {
            form: {},
            showSize: false,
        }
    },

    async created() {
        await this.reload()
    },

    methods: {
        async reload() {
            const productId = this.productID || this.$route.params.id
            await this.$pb.collection('Products').getList(1, 50, {filter: `id = '${productId}'`,})
                .then((r) => {
                    this.form = collect(r.items).first()
                })
        },
    },
}
</script>