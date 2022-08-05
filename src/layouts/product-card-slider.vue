<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import ProductCard from "@components/product-card.vue";
import PrimaryButton from "@components/primary-button.vue";
import { ref } from "vue";
import { Swiper as ISwiper } from "swiper/types";
import { useGetProducts } from "@services/product";

const swiper = ref<ISwiper | null>(null);
const onSwiper = (swiperState: ISwiper) => (swiper.value = swiperState);

const { isLoading, isError, isSuccess, response, getProducts } =
    useGetProducts();
getProducts();
</script>

<template>
    <div class="card-slider">
        <div class="card-slider__header">
            <h2
                class="card-slider__title title text-3xl font-bold text-dark-green"
            >
                <slot>Products</slot>
            </h2>
            <div class="card-slider__controls">
                <PrimaryButton
                    class="button-slider-prev"
                    @click="swiper?.slidePrev()"
                >
                    <BIconArrowLeft />
                </PrimaryButton>
                <PrimaryButton
                    class="button-slider-next"
                    @click="swiper?.slideNext()"
                >
                    <BIconArrowRight />
                </PrimaryButton>
            </div>
        </div>
        <Swiper
            v-if="isSuccess"
            :modules="[Navigation]"
            :slides-per-view="3"
            :space-between="30"
            @swiper="onSwiper"
        >
            <SwiperSlide v-for="item of response?.products" :key="item.id">
                <ProductCard
                    :thumbnail="item.gallery[0].image"
                    :title="item.title"
                    :description="item.description"
                    :id="item.id"
                />
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<style lang="scss" scoped src="./product-card-slider.scss"></style>
