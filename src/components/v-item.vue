<template>
    <div class="v-item">
        <img :src=" require('../assets/images/' + product_data.image )" alt="img">
        <p class="catalog_name">{{product_data.name}}</p>
        <div class="like">
            <p class="catalog_price">{{ product_data.price }} ₸</p>
            <button class="like_button"> ♡</button>
        </div>
        <button class="catalog_add btn"
        @click="addToCard"
        >ADD TO CARD</button>
    </div>
</template>

<script>
 export default{
    name: "v-item",
    props: {
        product_data: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    data() {
        return {}
    },
    computed: {},
    methods: {
        addToCard(){
            this.$emit('addToCard', this.product_data)
        }
    }
 }
</script>

<style>
.v-item{
    flex-basis: 20%;
    box-shadow: 0 0 8px 0;
    padding:16px;
    margin-bottom: 16px;
}
img{
    width: 200px;
    height: 200px;
}
.catalog_add{
    border: none;
    background-color: #9B0101;
    color: white;
    width: 150px;
    height: 30px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}
.catalog_price{
    color: #9B0101;
}
.catalog_name{
    font-size: 16px;
}
.like{
    display: flex;
    justify-content: center;
}
.like_button{
    border: none;
    background-color: white;
    color: #9B0101;
}
</style>