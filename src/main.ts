import { createApp } from "vue";
import App from "./App.vue";

//  集成 Vue Router
import router from "./router/index";

//  集成 Vuex
import store from "./store/index";

createApp(App).use(router).use(store).mount("#app");
