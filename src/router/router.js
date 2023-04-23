import VueRouter from 'vue-router'; 

import index from "src/pages/main/index.vue"; 

import App from '../App.vue'; 

export const router = new VueRouter([{
    path: '/', 
    component: App, 
    children: [ 
        { 
            path: '', 
            redirect: '/home', 
        }, 
        {   
            path: '/home', 
            component: Home, 
        }
    ]
}])