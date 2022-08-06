<script lang="ts" setup>
import { ref } from "vue";
import ProductSlider from "../components/product-slider.vue";
import QuantityCounter from "../components/quantity-counter.vue";
import ProductPrice from "../components/product-price.vue";
import PrimaryButton from "@components/primary-button.vue";
import { useRoute } from "vue-router";
import { getProductById } from "@services/product";
import { useQuery } from "vue-query";

const route = useRoute();
const productId = route.params.id as string;

const { isSuccess, data } = useQuery(
    ["single-product", productId],
    async () => getProductById(+productId)
);

const v = ref(1);
</script>
<template>
    <div v-if="isSuccess" class="single-product-info">
        <div class="product-gallery-slider">
            <ProductSlider :gallery="(data!.gallery)" />
        </div>
        <div class="summary">
            <h2 class="title">{{ data?.title }}</h2>
            <p class="standart-text">
                {{ data?.description }}
            </p>

            <ProductPrice
                :price="+data!.price"
                :available-quantity="data?.quantity"
            />
            <QuantityCounter
                v-model="v"
                :max-value="data?.quantity"
            />
            <PrimaryButton
                ><BIconCart4 /> Add to basket</PrimaryButton
            >
        </div>
    </div>
</template>

<style lang="scss" src="./single-product-info.scss"></style>
