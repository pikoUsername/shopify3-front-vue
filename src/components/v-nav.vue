<template>
    <div class="v-nav">
        <h2>THE BEST ELECTRO STORE</h2>
        <ul>
            <li><a href="#">CATALOG</a></li>
            <li><a href="#">CREDIT</a></li>
            <li><a href="#">CONTACT</a></li>
            <li><a href="#">LOCATIONS</a></li>
        </ul>
    </div>
    <div class="im">
          <img class="logo"  src="../assets/images/logoo.jpg" alt="logo">  
          <input class="inp" type="text" placeholder="SEARCH FROM 15 THOUSAND ITEMS...">
    </div>
    <div>
    </div>
</template>

<script>
    export default{
        name: 'v-nav',
        components:{
        },
        props: {},
        methods: {},
        watch: {},
        mounted(){
        }
    }
</script>

<style>
ul {
  list-style: none;
  padding: 0;
  display: flex;
  list-style: none;
  display: flex;
}

li {
  margin: 0 10px;
}

a {
  color: #ffffff;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.v-nav{
    font-size: 10px;
    display: flex;
    background-color: #9B0101;
    height: 30px;
    justify-content: space-between;
}
h2{
    color: white;
}
.logo{
    width: 190px;
    height: 40px;
    margin-top: 10px;
}
.inp{
    border-color: #9B0101;
    width: 719px;
    height: 40px;
    border-radius: 10px;
    margin-left: 100px;
}
</style>