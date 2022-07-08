<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Thumbs } from "swiper";
import { Swiper as SwiperType } from "swiper/types";
import { ref, watch } from "vue";
import useSliderZoom from "@composables/use-slider-zoom";
import LabelButtom from "@components/label-button.vue";

const isZoomActive = ref(false);
const imgSlides = ref<any | null>(null);
const swiperEntity = ref<SwiperType | null>(null);

const onSwiper = (swiper: SwiperType) => (swiperEntity.value = swiper);

watch(isZoomActive, (newValue: boolean) =>
    swiperEntity.value ? (swiperEntity.value.allowTouchMove = !newValue) : false
);

useSliderZoom(imgSlides, {
    zoomContainerClass: ".prodcut-slider__zoom-container",
    triggerZoomElementClass: ".prodcut-slider__img",
    isZoomActive,
});
</script>
<template>
    <div class="prodcut-slider">
        <Swiper :modules="[Thumbs]" @swiper="onSwiper">
            <SwiperSlide
                v-for="(item, index) of 3"
                ref="imgSlides"
                :key="index"
                class="prodcut-slider__slide"
                @click="isZoomActive = !isZoomActive"
            >
                <div class="prodcut-slider__zoom-container img">
                    <img src="@assets/product-card-thumbnail.jpg" alt="" />
                </div>
                <div class="img prodcut-slider__img">
                    <img
                        class=""
                        src="@assets/product-card-thumbnail.jpg"
                        alt=""
                    />
                </div>
            </SwiperSlide>
        </Swiper>
        <Transition
            mode="out-in"
            name="label-anim"
            @click="isZoomActive = !isZoomActive"
        >
            <LabelButtom v-if="!isZoomActive">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path
                        fill-rule="evenodd"
                        d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                    />
                    <path
                        d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"
                    />
                    <path
                        fill-rule="evenodd"
                        d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
                    />
                </svg>
                zoom
            </LabelButtom>
            <LabelButtom v-else>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path
                        fill-rule="evenodd"
                        d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                    />
                    <path
                        d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"
                    />
                    <path
                        fill-rule="evenodd"
                        d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"
                    />
                </svg>
                close
            </LabelButtom>
        </Transition>
    </div>
</template>
<style lang="scss" src="./product-slider.scss"></style>
