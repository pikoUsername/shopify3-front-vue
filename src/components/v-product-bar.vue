<template> 
    <div v-if="current_product">
        <div class="product-bar">
            <router-link to="/sellers">
                <div class="where-buy">
                    <p>Где купить <span>{{ current_product.sellers.length }}</span></p>
                </div>
            </router-link>
            <router-link to="/reviews">
                <div class="reviews">
                    <p>Отзывы <span>{{ current_product.reviews.length }}</span></p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default { 
    name: "VProductBar", 
    props: {
        product: Object, 
    }, 
    computed: { 
        ...mapGetters([
            'current_product', 
        ])
    }
}
</script>
