import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'

//  集成 Vue Router
import router from './router/index'

//  集成 Vuex
import store from './store/index'

//  集成 ElementPlus
import 'element-plus/dist/index.css'

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
