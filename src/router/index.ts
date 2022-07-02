import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "@views/home-page.vue";

const routes: RouteRecordRaw[] = [{ path: "/a", component: HomePage }];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
