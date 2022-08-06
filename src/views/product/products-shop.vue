<script lang="ts" setup>
import { ProductCardGrid, ProductCard } from "@/feature/product-loop";
import PagePagination from "@components/page-pagination.vue";
import { getProductsPagination } from "@services/product";
import { useRoute } from "vue-router";
import { watch } from "vue";
import { useQuery } from "vue-query";

const { isLoading, isError, isSuccess, data } = useQuery(
    ["shop", 1],
    async () => getProductsPagination(1)
);
watch(data, (v) => console.log(v));
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
                    v-for="item of data?.products"
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
