<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import ProductCard from "@components/product-card.vue";
import PrimaryButton from "@components/primary-button.vue";
import { ref } from "vue";

import { SwiperModule, SwiperOptions } from "swiper/types";

const swiper = ref<SwiperOptions | null>(null);

const onSwiper = (swiperState: SwiperOptions) => (swiper.value = swiperState);
</script>

<template>
    <div class="card-slider">
        <div class="card-slider__header">
            <h2 class="card-slider__title title"><slot>Products</slot></h2>
            <div class="card-slider__controls">
                <PrimaryButton class="button-slider-prev" dark>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path
                            fill-rule="evenodd"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                        />
                    </svg>
                </PrimaryButton>
                <PrimaryButton class="button-slider-next" dark>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path
                            fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        /></svg
                ></PrimaryButton>
            </div>
        </div>
        <Swiper :slides-per-view="3" :space-between="30">
            <SwiperSlide>
                <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard />
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<style lang="scss" scoped src="./product-card-slider.scss"></style>
