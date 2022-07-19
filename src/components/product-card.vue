<script lang="ts" setup>
import { toRefs } from "vue";
import PrimaryButton from "@components/primary-button.vue";
import InsignificantButton from "@components/insignificant-button.vue";
import { StoreCardProps } from "@interfaces/store-card";

const props = defineProps<StoreCardProps>();
const {
    dark,
    title = "Product",
    price,
    description,
    thumbnail,
} = toRefs(props);
</script>

<template>
    <div :class="{ 'product-card_dark': dark }" class="product-card">
        <div class="product-card__img img">
            <img v-if="thumbnail" :src="thumbnail" alt="" />
            <img v-else src="@assets/product/unavailable-img.jpg" alt="" />
        </div>
        <h3 class="product-card__title item-title">{{ title }}</h3>
        <p v-show="price" class="product-card__price standart-text">
            {{ price }}$
        </p>
        <p v-show="description" class="product-card__description standart-text">
            {{ description }}
        </p>
        <div class="product-card__controls">
            <PrimaryButton light>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path
                        d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                    />
                </svg>
            </PrimaryButton>
            <InsignificantButton light />
        </div>
    </div>
</template>

<style lang="scss" src="./product-card.scss"></style>
