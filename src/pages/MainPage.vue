<template>
    <div class="v-mainpage">
        <vCatalog />
        <vCard
        v-if="CARD.length"
        :card_data="CARD"
        />
    </div>
</template>

<script>
 import vCatalog from '@/components/v-catalog.vue';
 import vCard from '@/components/v-card.vue';
 import { mapGetters } from 'vuex';
    export default{
        name: 'v-mainpage',
        components:{
            vCatalog,
            vCard
        },
        props: {},
        data() {
            return {
                title: "Main Page"
            }
        },
        computed: {
            ...mapGetters([
                'CARD'
            ])
        },
        methods: {},
        watch: {},
        mounted(){
            console.log('Hello world')
        }
    }
</script>

<style>
  .v-mainpage{
    max-width: 1100px;
    margin: 0 auto;
  }
</style>