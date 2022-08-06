<script lang="ts" setup>
import { SideBar } from "@/feature/admin";
</script>
<template>
    <div class="flex justify-start">
        <SideBar />
        <RouterView class="py-4" />
    </div>
</template>
