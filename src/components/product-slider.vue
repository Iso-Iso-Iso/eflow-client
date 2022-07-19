<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Thumbs, Pagination } from "swiper";
import { Swiper as SwiperType, SwiperOptions } from "swiper/types";
import { ref, toRef, watch } from "vue";
import useSliderZoom from "@composables/use-slider-zoom";
import LabelButtom from "@components/label-button.vue";
import PrimaryButton from "@components/primary-button.vue";
import { ProductSliderProps } from "@interfaces/product";

const isZoomActive = ref(false);
const imgSlides = ref<any | null>(null);
const swiperGalleryEntity = ref<SwiperType | null>(null);
const swiperThumbsEntity = ref<SwiperType | null>(null);
const swiperPagination = ref(null);

const props = defineProps<ProductSliderProps>();
const gallery = toRef(props, "gallery");

const onGallerySwiper = (swiper: SwiperType) =>
    (swiperGalleryEntity.value = swiper);
const onThumbsSwiper = (swiper: SwiperType) =>
    (swiperThumbsEntity.value = swiper);

watch(isZoomActive, (newValue: boolean) =>
    swiperGalleryEntity.value
        ? (swiperGalleryEntity.value.allowTouchMove = !newValue)
        : false
);

useSliderZoom(imgSlides, {
    zoomContainerClass: ".prodcut-gallery__zoom-container",
    triggerZoomElementClass: ".prodcut-gallery__img",
    isZoomActive,
});

type SwiperBreackpoints = { [key: number]: SwiperOptions };

const swiperSetupBreackpoints: SwiperBreackpoints = {
    510: {
        direction: "vertical",
    },
    375: { direction: "horizontal", slidesPerView: 3.5 },
    0: { direction: "horizontal", slidesPerView: 2.5 },
};
</script>

<template>
    <div class="product-slider-wrapper">
        <div class="product-thumbnails-wrapper">
            <PrimaryButton @click="swiperThumbsEntity?.slidePrev()">
                <BIconArrowUp />
            </PrimaryButton>
            <Swiper
                :slides-per-view="4"
                :space-between="15"
                :modules="[Thumbs]"
                :breakpoints="swiperSetupBreackpoints"
                direction="vertical"
                class="product-thumbnails"
                @swiper="onThumbsSwiper"
            >
                <SwiperSlide v-for="(item, index) of gallery" :key="index">
                    <div class="product-thumbnails__img img">
                        <img :src="item.image" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
            <PrimaryButton @click="swiperThumbsEntity?.slideNext()">
                <BIconArrowDown />
            </PrimaryButton>
        </div>

        <div class="prodcut-gallery">
            <Swiper
                :modules="[Thumbs, Pagination]"
                :pagination="{ el: swiperPagination, type: 'fraction' }"
                :thumbs="{ swiper: swiperThumbsEntity }"
                @swiper="onGallerySwiper"
            >
                <SwiperSlide
                    v-for="(item, index) of gallery"
                    ref="imgSlides"
                    :key="index"
                    class="prodcut-gallery__slide"
                    @click="isZoomActive = !isZoomActive"
                >
                    <div class="prodcut-gallery__zoom-container img">
                        <img :src="item.image" />
                    </div>
                    <div class="img prodcut-gallery__img">
                        <img :src="item.image" />
                    </div>
                </SwiperSlide>
            </Swiper>
            <div class="flex-space">
                <Transition
                    mode="out-in"
                    name="label-anim"
                    @click="isZoomActive = !isZoomActive"
                >
                    <LabelButtom v-if="!isZoomActive">
                        <BIconZoomIn /> zoom
                    </LabelButtom>
                    <LabelButtom v-else>
                        <BIconZoomOut />
                        hover on image
                    </LabelButtom>
                </Transition>
                <div
                    ref="swiperPagination"
                    class="prodcut-gallery__pagination"
                ></div>
                <div class="flex-center">
                    <LabelButtom @click="swiperGalleryEntity?.slidePrev()">
                        <BIconArrowLeft />
                    </LabelButtom>
                    <LabelButtom @click="swiperGalleryEntity?.slideNext()">
                        <BIconArrowRight />
                    </LabelButtom>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" src="./product-slider.scss"></style>
