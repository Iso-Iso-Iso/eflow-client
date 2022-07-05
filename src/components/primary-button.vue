<script lang="ts" setup>
import { toRefs } from "vue";

interface PrimaryButtonProps {
    dark?: boolean;
}

const props = defineProps<PrimaryButtonProps>();
const { dark } = toRefs(props);
</script>

<template>
    <button :class="{ button_dark: dark }" class="button">
        <slot>Отправить</slot>
    </button>
</template>
<style scoped lang="scss" src="./primary-button.scss"></style>
