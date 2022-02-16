import { createApp } from "vue";
import App from "./App.vue";

//  集成 vue-router
import router from "./router/index";

createApp(App).use(router).mount("#app");
