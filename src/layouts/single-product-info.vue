<script lang="ts" setup>
import ProductSlider from "@components/product-slider.vue";
import QuantityCounter from "@components/quantity-counter.vue";
import { ref } from "vue";
import PrimaryButton from "@components/primary-button.vue";
import ProductPrice from "@components/product-price.vue";

const v = ref(1);
</script>
<template>
    <div class="single-product-info">
        <div class="product-gallery-slider">
            <ProductSlider />
        </div>
        <div class="summary">
            <p class="standart-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cum
                esse eum culpa. Similique dolore perferendis vitae, a iure
                dolorum reiciendis ullam ratione fugiat nesciunt quos sint
                harum. Inventore, sit.
            </p>

            <ProductPrice />
            <QuantityCounter v-model="v" />
            <PrimaryButton><BIconCart4 /> Add to basket</PrimaryButton>
        </div>
    </div>
</template>

<style lang="scss" src="./single-product-info.scss"></style>
