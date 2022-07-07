<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import ProductCard from "@components/product-card.vue";
import PrimaryButton from "@components/primary-button.vue";
import { ref } from "vue";

import { Swiper as ISwiper } from "swiper/types";

const swiper = ref<ISwiper | null>(null);

const onSwiper = (swiperState: ISwiper) => (swiper.value = swiperState);
</script>

<template>
    <div class="card-slider">
        <div class="card-slider__header">
            <h2 class="card-slider__title title"><slot>Products</slot></h2>
            <div class="card-slider__controls">
                <PrimaryButton
                    class="button-slider-prev"
                    dark
                    @click="swiper?.slidePrev()"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path
                            fill-rule="evenodd"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                        />
                    </svg>
                </PrimaryButton>
                <PrimaryButton
                    class="button-slider-next"
                    dark
                    @click="swiper?.slideNext()"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path
                            fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        /></svg
                ></PrimaryButton>
            </div>
        </div>
        <Swiper
            :modules="[Navigation]"
            :slides-per-view="3"
            :space-between="30"
            @swiper="onSwiper"
        >
            <SwiperSlide v-for="(item, index) in 5" :key="index">
                <ProductCard />
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<style lang="scss" scoped src="./product-card-slider.scss"></style>
