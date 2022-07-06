<script lang="ts" setup>
import { toRefs } from "vue";

interface InsignificantButtonProps {
    light?: boolean;
    reverse?: boolean;
}
const props = defineProps<InsignificantButtonProps>();
const { light, reverse } = toRefs(props);
</script>
<template>
    <button
        :class="{ button_light: light, button_reverse: reverse }"
        class="button"
    >
        <span>
            <slot>More</slot>
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
        </svg>
    </button>
</template>

<style lang="scss" src="./insignificant-button.scss" scoped></style>
