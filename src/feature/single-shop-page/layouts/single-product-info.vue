<script lang="ts" setup>
import ProductSlider from "@/feature/single-shop-page/components/product-slider.vue";
import QuantityCounter from "@/feature/single-shop-page/components/quantity-counter.vue";
import { ref, watch } from "vue";
import PrimaryButton from "@components/primary-button.vue";
import ProductPrice from "@/feature/single-shop-page/components/product-price.vue";
import { useRoute } from "vue-router";
import { useGetSingleProduct } from "@services/product";

const route = useRoute();

const { isSuccess, response, getSingleProduct } = useGetSingleProduct();

const productId = route.params.id as string;
getSingleProduct(productId);

watch(
    () => productId,
    (id) => getSingleProduct(id)
);

const v = ref(1);
</script>
<template>
    <div v-if="isSuccess" class="single-product-info">
        <div class="product-gallery-slider">
            <ProductSlider :gallery="(response!.gallery)" />
        </div>
        <div class="summary">
            <h2 class="title">{{ response?.title }}</h2>
            <p class="standart-text">
                {{ response?.description }}
            </p>

            <ProductPrice
                :price="+response!.price"
                :available-quantity="response?.quantity"
            />
            <QuantityCounter v-model="v" :max-value="response?.quantity" />
            <PrimaryButton><BIconCart4 /> Add to basket</PrimaryButton>
        </div>
    </div>
</template>

<style lang="scss" src="./single-product-info.scss"></style>
