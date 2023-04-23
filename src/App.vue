<template>
  <div>
    <vNav />
    <router-view></router-view>
    <!-- <vMainpage/>  -->
    <vFooter/> 
  </div>
</template>

<script>
import vNav from './components/v-nav.vue';
import VFooter from './components/v-footer.vue'; 

export default {
  name: 'App',
  components: {
    vNav, 
    VFooter, 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: -10px;
}
</style>
