<script lang="ts" setup>
import PrimaryButton from "@components/primary-button.vue";
import SecondaryButton from "@components/secondary-button.vue";
</script>
<script lang="ts">
export default {
    data() {
        return {
            isActive: false,
        };
    },
    methods: {
        activateMenu: function () {
            this.isActive = !this.isActive;
        },
    },
};
</script>

<template>
    <div class="navigation">
        <div class="container">
            <div class="company-name">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M24 12C24 14.3734 23.2962 16.6935 21.9776 18.6668C20.6591 20.6402 18.7849 22.1783 16.5922 23.0866C14.3995 23.9948 11.9867 24.2324 9.65892 23.7694C7.33114 23.3064 5.19295 22.1635 3.51472 20.4853C1.83649 18.8071 0.693597 16.6689 0.230575 14.3411C-0.232448 12.0133 0.00519168 9.6005 0.913444 7.4078C1.8217 5.21509 3.35977 3.34094 5.33316 2.02236C7.30655 0.70379 9.62662 0 12 0V6C10.8133 6 9.65327 6.35189 8.66658 7.01118C7.67988 7.67047 6.91085 8.6075 6.45672 9.7039C6.0026 10.8003 5.88378 12.0067 6.11529 13.1705C6.3468 14.3344 6.91824 15.4035 7.75736 16.2426C8.59647 17.0818 9.66557 17.6532 10.8295 17.8847C11.9933 18.1162 13.1997 17.9974 14.2961 17.5433C15.3925 17.0892 16.3295 16.3201 16.9888 15.3334C17.6481 14.3467 18 13.1867 18 12H24Z"
                        fill="#C1D585"
                    />
                </svg>
                <p>Logo</p>
            </div>
            <div
                @click="activateMenu"
                v-bind:class="{ _active: isActive }"
                class="navigation__burger-icon"
            >
                <span v-bind:class="{ _active: isActive }"></span>
            </div>
            <nav v-bind:class="{ _active: isActive }" class="navigation__nav">
                <ul class="navigation__links">
                    <li><a href="#">Our Story</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Pricing</a></li>
                    <SecondaryButton class="navigation__login"
                        >Log in</SecondaryButton
                    >
                    <PrimaryButton class="navigation__free-try"
                        >Try for free</PrimaryButton
                    >
                </ul>
            </nav>
        </div>
    </div>
</template>

<style lang="scss" src="./navigation-header.scss" scoped></style>
