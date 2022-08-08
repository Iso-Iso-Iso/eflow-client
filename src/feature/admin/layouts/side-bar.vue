<script lang="ts" setup>
import SideBarWrapper from "../components/side-bar-wrapper.vue";
import SideBarItem from "../components/side-bar-item.vue";
</script>

<template>
    <SideBarWrapper>
        <SideBarItem>
            <template #title>
                <BIconHouse class="mr-2" />
                Admin home</template
            >
        </SideBarItem>
        <SideBarItem>
            <template #title>
                <BIconBoxSeam class="mr-2" />
                Products</template
            >
            <p>Все продукты</p>
            <p>Создать продукт</p>
        </SideBarItem>
    </SideBarWrapper>
</template>
