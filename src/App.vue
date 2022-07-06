<script setup lang="ts">
import "swiper/css/bundle";
</script>

<template>
    <RouterLink :to="{ name: 'home-page' }">Домой</RouterLink>
     <div class="container">
        <RouterView />
    </div>
</template>
<style lang="scss" src="@scss/main.scss"></style>
