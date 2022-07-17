<script lang="ts" setup>
import PrimaryButton from "@components/primary-button.vue";
</script>
<template>
    <div class="business-start">
        <div class="container">
            <div class="business-start__main-title">
                Head start your business today!
            </div>
            <div class="business-start__sub-title">
                Consectetur adipiscing elit. Integer sagittis quam magna, quis
                sollicitudin lorem ornare ut. Nulla et scelerisque mauris.
            </div>
            <div class="business-start__buttons">
                <PrimaryButton dark class="business-start__starting-btn"
                    >Get started</PrimaryButton
                >
                <button class="business-start__trying-btn">
                    Try for free
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.7937 4.85071C5.9743 5.03133 5.9743 5.32412 5.7937 5.50473L1.0784 10.22C0.897777 10.4006 0.604997 10.4006 0.424377 10.22L0.206327 10.002C0.0257068 9.82139 0.0257068 9.52849 0.206327 9.34789L4.37654 5.17772L0.206327 1.00751C0.0257068 0.826895 0.0257068 0.534104 0.206327 0.353484L0.424377 0.135434C0.604987 -0.0451855 0.897777 -0.0451855 1.0784 0.135434L5.7937 4.85071Z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" src="./business-start.scss" scoped></style>
