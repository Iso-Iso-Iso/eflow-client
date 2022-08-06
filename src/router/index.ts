import {
    createRouter,
    createWebHistory,
    RouteRecordRaw,
} from "vue-router";
import HomePage from "@views/home-page.vue";
import { AdminPageWrapper } from "@/feature/admin";
import PageWrapper from "@layouts/page-wrapper.vue";

const AdminHomePage = () => import("@views/admin/home-page.vue");
const ShopPage = () => import("@views/product/products-shop.vue");
const SingleProductPage = () =>
    import("@views/product/single-product.vue");

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: PageWrapper,
        children: [
            {
                path: "",
                component: HomePage,
                name: "home-page",
            },
            {
                path: "shop",
                component: ShopPage,
                name: "product-shop",
            },
            {
                path: "product/:id",
                component: SingleProductPage,
                name: "single-product",
            },
        ],
    },
    {
        path: "/admin",
        component: AdminPageWrapper,
        children: [
            {
                name: "admin/home",
                path: "",
                component: AdminHomePage,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
