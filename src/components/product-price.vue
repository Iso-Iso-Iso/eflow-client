<!-- TODO! rename  -->
<script setup lang="ts">
import { toRefs } from "vue";
const props = defineProps({
    price: {
        type: Number,
        required: false,
        default: 0,
    },
    availableQuantity: {
        type: Number,
        required: false,
        default: 0,
    },
});

const { price, availableQuantity } = toRefs(props);
</script>

<template>
    <div class="product-price-info">
        <p class="price">{{ price }}$</p>
        <span> - </span>
        <p class="available-quantity">{{ availableQuantity }} available</p>
    </div>
</template>

<style lang="scss" src="./product-price.scss" scoped></style>
