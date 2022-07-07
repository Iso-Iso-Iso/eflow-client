<script lang="ts" setup>
import { toRefs } from "vue";
import  { PrimaryButtonProps } from "@interfaces/button";

const props = defineProps<PrimaryButtonProps>();
const { light } = toRefs(props);
</script>

<template>
    <button :class="{ button_light: light }" class="button">
        <slot>Отправить</slot>
    </button>
</template>
<style scoped lang="scss" src="./primary-button.scss"></style>
