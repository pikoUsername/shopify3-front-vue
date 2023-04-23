import { createRouter, createWebHashHistory } from 'vue-router'; 

import MainPage from "../pages/MainPage.vue"
import UserCart from "../pages/UserCart.vue"
import ShowAllProducts from "../pages/ShowAllProducts.vue"

const routes = [ 
    {   
        path: '/', 
        name: 'home',
        component: MainPage, 
    }, 
    { 
        path: '/cart', 
        name: 'cart', 
        component: UserCart,  
    }, 
    {
        path: '/products', 
        name: 'products', 
        component: ShowAllProducts
    }
]

const router = createRouter({  history: createWebHashHistory(), routes })

export default router; 
