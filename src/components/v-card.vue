<template>
    <div class="v-card">
        <h1>Корзина</h1>
        <v-card-item
        v-for="(item, index) in card_data"
        :key="item.article"
        :card_item_data="item"
        @deleteFromCard="deleteFromCard(index)"
        />  
   </div>
</template>

<script>
import vCardItem from './v-card-item.vue';
import { mapActions } from 'vuex';

 export default{
    name: "v-card",
    components:{
        vCardItem
    },
    props: {
        card_data:{
            type: Array,
            default(){
                return[]
            }
        }
    },
    data() {
        return {}
    },
    computed: {},
    methods:{
        ...mapActions([
            'DELETE_FROM_CARD'
        ]),
        deleteFromCard(index){
            this.DELETE_FROM_CARD(index)
        }
    }
 }
</script>

<style>
</style>