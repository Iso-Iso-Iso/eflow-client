<script lang="ts" setup>
import { toRefs } from "vue";
import { SecondaryButtonProps } from "@interfaces/button";

const props = defineProps<SecondaryButtonProps>();
const { dark } = toRefs(props);
</script>

<template>
    <button :class="{ button_dark: dark }" class="button">
        <slot>Отправить</slot>
    </button>
</template>
<style scoped lang="scss" src="./secondary-button.scss"></style>
