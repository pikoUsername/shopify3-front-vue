
import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router/router'

app = createApp(App, {
    router, 
    store, 
}).mount("#app")
  