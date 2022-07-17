<script setup lang="ts">
import HeaderMain from "@layouts/header-main.vue";
import BusinessStart from "@layouts/business-start.vue";
import "swiper/css/bundle";
</script>

<template>
    <HeaderMain />
    <BusinessStart />
    <div class="container">
        <RouterView />
    </div>
</template>
<style lang="scss" src="@scss/main.scss"></style>
