import { createRouter } from 'vue-router'; 

import MainPage from "../pages/MainPage.vue"
import UserCart from "../pages/UserCart.vue"
import ShowAllProducts from "../pages/ShowAllProducts.vue"

const Example = {
    template: "<div>Something</div>"
}

const routes = [ 
    {
        path: '/', 
        name: 'index', 
        component: Example, 
    }, 
    {   
        path: '/home', 
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

const router = createRouter(routes)

export default router; 
