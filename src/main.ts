import { createApp } from "vue";
import App from "./App.vue";
import router from "@router/index";
import { createPinia } from "pinia";
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";
import { VueQueryPlugin } from "vue-query";

const pinia = createPinia();

createApp(App)
    .use(router)
    .use(pinia)
    .use(VueQueryPlugin)
    .use(BootstrapIconsPlugin)
    .mount("#app");
