import { createApp } from "vue";
import App from "./App.vue";
import router from "@router/index";
import { createPinia } from "pinia";
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";
const pinia = createPinia();

createApp(App).use(router).use(pinia).use(BootstrapIconsPlugin).mount("#app");
