<script lang="ts" setup>
import ProductCardGrid from "@layouts/product-card-grid.vue";
import ProductCard from "@components/product-card.vue";
import PagePagination from "@components/page-pagination.vue";
</script>
<template>
    <div class="shop-page">
        <ProductCardGrid>
            <ProductCard v-for="(item, index) of 12" :key="index" />
        </ProductCardGrid>
        <PagePagination />
    </div>
</template>
