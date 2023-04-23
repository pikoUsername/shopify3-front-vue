<template>
    <div class="v-card-item">
        <img class="card_image" :src=" require('../assets/images/' + card_item_data.image )" alt="">
        <div class="item_info">
            <p>{{ card_item_data.name }}</p>
            <p>{{ card_item_data.price }}</p>
            <p>{{ card_item_data.article }}</p>
        </div>
        <button @click="deleteFromCard">DELETE</button>
    </div>
</template>

<script>

 export default{
    name: "v-card-item",
    props: {
        card_item_data: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    data() {
        return {}
    },
    computed: {},
    methods:{
        deleteFromCard(){
            this.$emit('deleteFromCard')
        }
    }
 }
</script>

<style>
.v-card-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    box-shadow: 0 0 8px 0;
    padding:16px;
    margin-bottom: 16px;
}
.card_image{
    width: 100px;
    height: 100px;
}
</style>