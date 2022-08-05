<script lang="ts" setup>
import ProductCardGrid from "@layouts/product-card-grid.vue";
import ProductCard from "@components/product-card.vue";
import PagePagination from "@components/page-pagination.vue";
import { useGetProducts } from "@services/product";
import { useRoute } from "vue-router";
import { watch } from "vue";

const { isLoading, isError, isSuccess, response, getProducts } =
    useGetProducts();
getProducts();

const route = useRoute();

watch(
    () => route.query.p,
    (newPage) => console.log(newPage)
);
</script>
<template>
    <div class="shop-page">
        <div v-if="isLoading">Loading...</div>
        <div v-if="isSuccess">
            <ProductCardGrid>
                <ProductCard
                    v-for="item of response?.products"
                    :id="item.id"
                    :key="item.id"
                    :description="item.description"
                    :title="item.title"
                    :price="+item.price"
                    :thumbnail="item.gallery[0].image"
                />
            </ProductCardGrid>
            <PagePagination />
        </div>
    </div>
</template>
