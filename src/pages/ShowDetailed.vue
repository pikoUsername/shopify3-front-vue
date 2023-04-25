<template>
    <div class="detailed">
        <VProductBar />
        <div class="path">
            {{ path }}
        </div>
        <div class="image">
            <img :src="current_product.img_url" :alt="getImageUrlAlt">
        </div>
        <div class="sellers-box">
            <div class="range">
                <p>{{ range }}</p>
            </div>
            <div class="sellers-money" v-for="seller in current_product.sellers">
                <a href="{{ seller.url }}" {{ seller.name }}></a>
                <p class="price">{{ seller.price  }}</p>
            </div>
        </div>
        <div class="tags">
            <div v-for="tag in current_product.tags">
                <div class="tag-box">{{ tag.name }}</div>
            </div>
        </div>
        <div class="description">
            <p>{{ current_product.description }}</p>
        </div>
    </div> 
</template>

<script>
import VProductBar from '@/components/v-product-bar.vue';
import { mapState, mapGetters } from 'vuex';

export default {
    name: "ShowDetailed", 
    components: [ 
        VProductBar, 
    ],  
    computed: { 
        ...mapState([
            'path', 
        ]), 
        ...mapGetters([
            'current_product', 
            'range', 
        ]), 
        getImageUrlAlt() { 
            return this.current_product.img_url_alt ? this.current_product.img_url_alt : '' 
        }
    } 
}
</script>

<style>

</style>
