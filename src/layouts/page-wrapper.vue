<script lang="ts" setup>
import HeaderMain from "@layouts/header-main.vue";
import BusinessStart from "@layouts/business-start.vue";
</script>
<template>
    <HeaderMain />
    <BusinessStart />
    <div class="container">
        <RouterView />
    </div>
</template>
