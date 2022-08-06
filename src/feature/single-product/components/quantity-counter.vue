<script lang="ts" setup>
import PrimaryButton from "@components/primary-button.vue";
import { toRefs } from "vue";

const props = defineProps({
    maxValue: {
        type: Number,
        default: 999,
    },
    modelValue: { type: Number, required: true },
    minValue: { type: Number, default: 1 },
});
const emit = defineEmits(["update:modelValue"]);

const { modelValue, maxValue, minValue } = toRefs(props);

const isAbove = (value: Number) => value > maxValue.value;

const isBelow = (value: Number) => value < minValue.value;

const normalizeMax = () => emit("update:modelValue", maxValue.value);
const normalizeMin = () => emit("update:modelValue", minValue.value);

function setQuantity(value: Number) {
    if (isAbove(value)) return normalizeMax();
    if (isBelow(value)) return normalizeMin();
    emit("update:modelValue", value);
}
</script>

<template>
    <div class="qty-counter">
        <input
            :value="modelValue"
            class="qty-counter__input"
            type="number"
            @change="setQuantity(+($event.target as HTMLInputElement).value)"
        />

        <PrimaryButton @click="setQuantity(modelValue - 1)">-</PrimaryButton>
        <PrimaryButton @click="setQuantity(modelValue + 1)">+</PrimaryButton>
    </div>
</template>
<style lang="scss" src="./quantity-counter.scss" scoped></style>
