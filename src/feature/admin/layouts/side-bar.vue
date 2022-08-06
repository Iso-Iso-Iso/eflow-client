<script lang="ts" setup>
import SideBarWrapper from "../components/side-bar-wrapper.vue";
import SideBarItem from "../components/side-bar-item.vue";
</script>

<template>
    <SideBarWrapper>
        <SideBarItem>
            <template #title>Test</template>
            1
        </SideBarItem>
    </SideBarWrapper>
</template>
