import { createRouter, createWebHashHistory } from 'vue-router'; 

import MainPage from "../pages/MainPage.vue"
import UserCart from "../pages/UserCart.vue"
import ShowAllProducts from "../pages/ShowAllProducts.vue"
import ShowDetailed from "../pages/ShowDetailed.vue"
import ProductReviews from "../pages/ProductReviews.vue" 
import ProductSellers from "../pages/ProductSellers.vue"

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
    }, 
    { 
        path: '/product/:id', 
        name: 'detailed-products', 
        component: ShowDetailed, 
        children: [ 
            { 
                path: '/sellers', 
                name: 'product-sellers', 
                component: ProductSellers, 
            }, 
            { 
                path: '/reviews', 
                name: 'product-reviews', 
                component: ProductReviews, 
            }
        ]
    }
]

const router = createRouter({  history: createWebHashHistory(), routes })

export default router; 
