<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import useSliderZoom from "@composables/use-slider-zoom";

const imgSlides = ref<any | null>(null);

useSliderZoom(imgSlides, {
    zoomContainerClass: ".prodcut-slider__zoom-container",
    triggerZoomElementClass: ".prodcut-slider__img",
});
</script>
<template>
    <div class="prodcut-slider">
        <Swiper>
            <SwiperSlide
                v-for="(item, index) of 3"
                ref="imgSlides"
                :key="index"
                class="prodcut-slider__slide"
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
    </div>
</template>
<style lang="scss" src="./product-slider.scss"></style>
