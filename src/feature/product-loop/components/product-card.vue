<script lang="ts" setup>
import { toRefs } from "vue";
import PrimaryButton from "@components/primary-button.vue";
import InsignificantButton from "@components/insignificant-button.vue";
import { StoreCardProps } from "@interfaces/store-card";
import { converExcerpt } from "@utils/conver-excerpt";

const props = defineProps<StoreCardProps>();
const {
    dark,
    title = "Product",
    price,
    description,
    thumbnail,
    id,
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
            {{ converExcerpt(description || "") }}
        </p>
        <div class="product-card__controls">
            <PrimaryButton light>
                <BIconCart4 />
            </PrimaryButton>
            <RouterLink
                v-if="id"
                :to="{ name: 'single-product', params: { id } }"
            >
                <InsignificantButton light />
            </RouterLink>
        </div>
    </div>
</template>

<style lang="scss" src="./product-card.scss"></style>
