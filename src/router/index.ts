import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "@views/home-page.vue";

const routes: RouteRecordRaw[] = [
    { path: "/", component: HomePage, name: "home-page" },
    {
        path: "/shop",
        component: () => import("@views/product/products-shop.vue"),
        name: "product-shop",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
