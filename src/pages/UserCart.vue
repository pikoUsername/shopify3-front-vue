<template>
    <div class="cart"> 
        <vCard
        v-if="CARD.length"
        :card_data="CARD"
        />
    </div>
</template>

<script>
import vItem from '@/components/v-item.vue'
import vCardItem from '@/components/v-card-item.vue'
import vCard from '@/components/v-card.vue'
import { mapState } from 'vuex'

export default { 
    name: 'UserCart',   
    components: [ 
        vItem, 
        vCardItem, 
        vCard
    ], 
    computed: {
        ...mapState([
            'CARD', 
        ])
    }, 
    props: {},
    mounted() { 
        console.log("Hello world")
    }
}
</script>
