<script setup lang="ts">
import HeaderMain from "@layouts/header-main.vue";
import "swiper/css/bundle";
</script>

<template>
    <HeaderMain />
    <div class="container">
        <RouterView />
    </div>
</template>
<style lang="scss" src="@scss/main.scss"></style>
