<template>
    <div class="v-catalog">
      <p class="razdel">NEW</p>
        <div class="list">
            <vItem
            v-for="product in PRODUCTS"
            :key="product.article"
            :product_data="product"
            @addToCard ='addToCard'
            />
        </div>
    </div>
</template>

<script>
import vItem from "./v-item.vue"
import {mapActions, mapGetters} from 'vuex'
 export default{
    name: "v-catalog",
    props: {},
    data() {
        return {
           
        }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS'
      ]),
    },
    components:{
        vItem
    },
    methods: {
      ...mapActions([
        'GET_PRODUCT_FROM_API',
        'ADD_TO_CARD'
      ]),
      addToCard(data){
        this.ADD_TO_CARD(data)
      }
    },
    mounted(){
      this.GET_PRODUCT_FROM_API()
      .then((response) =>{
        if (response.data) {
          console.log('Done')
        }
      })
    }
 }
</script>

<style>
.list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
.razdel{
  margin-top: 20px;
  color: #9B0101;
}

</style> 