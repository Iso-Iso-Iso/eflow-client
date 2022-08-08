<script lang="ts" setup>
import { ref, useSlots } from "vue";
import { useRouter } from "vue-router";

const isActive = ref(false);
const slots = useSlots();
const props = defineProps({
    to: Object,
});
const router = useRouter();

function onHeaderClick() {
    if (slots.default) isActive.value = !isActive.value;
    if (props.to) router.push(props.to);
}
</script>
<template>
    <div class="mb-3">
        <div
            class="flex items-center mb-1 text-dark-green p-3 text-xl font-medium bg-lime-600 rounded-md cursor-pointer hover:bg-lime-500 transition-all duration-200 active:scale-90"
            :class="{ 'bg-yellow-400 hover:bg-amber-300': isActive }"
            @click="onHeaderClick()"
        >
            <svg
                v-if="slots.default"
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 mr-1 transition-all duration-200"
                :class="{ 'rotate-180': isActive }"
                viewBox="0 0 16 16"
            >
                <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                />
            </svg>

            <slot name="title"></slot>
        </div>
        <Transition name="drop-menu">
            <div
                v-if="isActive && slots.default"
                class="h-[100%] overflow-hidden transition-all duration-200 origin-top"
            >
                <div class="p-3 rounded-md bg-lime-400">
                    <slot></slot>
                </div>
            </div>
        </Transition>
    </div>
</template>
<style lang="scss" scoped>
.drop-menu-enter-from,
.drop-menu-leave-to {
    transform: scaleY(0);
}
.drop-menu-enter-to,
.drop-menu-leave-from {
    transform: scaleY(1);
}
</style>
