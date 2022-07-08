import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "@views/home-page.vue";

const routes: RouteRecordRaw[] = [
    { path: "/", component: HomePage, name: "home-page" },
    {
        path: "/shop",
        component: () => import("@views/product/products-shop.vue"),
        name: "product-shop",
    },
    {
        path: "/product/:id",
        component: () => import("@views/product/single-product.vue"),
        name: "single-product",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
