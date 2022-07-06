<script lang="ts" setup>
import InsignificantButton from "@components/insignificant-button.vue";
</script>

<template>
    <div class="pagination">
        <InsignificantButton reverse class="pagination__button-prev"
            >Туда</InsignificantButton
        >
        <span class="pagination__page">1</span
        ><span class="pagination__page">2</span
        ><span class="pagination__page">3</span
        ><span class="pagination__page">4</span
        ><span class="pagination__page">5</span>
        <InsignificantButton class="pagination__button-next"
            >Сюда</InsignificantButton
        >
    </div>
</template>
<style lang="scss" src="./page-pagination.scss"></style>
