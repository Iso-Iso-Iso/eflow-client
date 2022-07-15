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
        <p v-show="price > 0" class="price">{{ price }}$</p>
        <span v-show="price > 0 && availableQuantity > 0"> - </span>
        <p v-show="availableQuantity > 0" class="available-quantity">
            {{ availableQuantity }} available
        </p>
    </div>
</template>

<style lang="scss" src="./product-price.scss" scoped></style>
