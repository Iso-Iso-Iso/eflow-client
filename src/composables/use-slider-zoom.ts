import { ref, onMounted, Ref } from "vue";
interface SliderZoomConfig {
    zoomContainerClass?: string;
    activeZoomContainerClass?: string;
    triggerZoomElementClass?: string;
}

function useSliderZoom(
    slidesForZoom: Ref<HTMLDivElement[]>,
    sliderZoomConfig?: SliderZoomConfig
) {
    const imgOffsetY = ref(0);
    const imgOffsetX = ref(0);
    const currentImageZoomContainer = ref<HTMLDivElement | null>(null);

    const zoomContainerClass =
        sliderZoomConfig?.zoomContainerClass || "zoom-container";

    const activeZoomContainerClass =
        sliderZoomConfig?.activeZoomContainerClass || "active-zoom";
    const triggerZoomElementClass =
        sliderZoomConfig?.triggerZoomElementClass || "zoom-trigger";

    function updateImagePosition() {
        if (!currentImageZoomContainer.value) return;
        let y = imgOffsetY.value;
        let x = imgOffsetX.value;
        // Zoom multiple size - 1
        y *= -3;
        x *= -3;

        currentImageZoomContainer.value.style.transform = `translate(${x}px,${y}px)`;

        window.requestAnimationFrame(updateImagePosition);
    }

    function onMouseOver(event: MouseEvent, item: HTMLDivElement) {
        if (!event.target) return;

        const innerZoomContainer: HTMLDivElement | null =
            item.querySelector(zoomContainerClass);

        if (!innerZoomContainer) return;

        currentImageZoomContainer.value = innerZoomContainer;
        window.requestAnimationFrame(updateImagePosition);

        innerZoomContainer.classList.add(activeZoomContainerClass);
    }

    function onMouseLeave(event: MouseEvent, item: HTMLDivElement) {
        if (!event.target) return;
        const innerZoomContainer = item.querySelector(zoomContainerClass);
        if (!innerZoomContainer) return;

        currentImageZoomContainer.value = null;
        innerZoomContainer.classList.remove(activeZoomContainerClass);
    }

    function onMouseMove(event: MouseEvent) {
        imgOffsetX.value = event.offsetX;
        imgOffsetY.value = event.offsetY;
    }

    onMounted(() => {
        if (slidesForZoom.value.length == 0) return;

        slidesForZoom.value.forEach((e: any) => {
            const zoomTrigger: HTMLDivElement | null = e.$el.querySelector(
                triggerZoomElementClass
            );
            if (!zoomTrigger) return;

            zoomTrigger.addEventListener("mouseover", (event: MouseEvent) =>
                onMouseOver(event, e.$el)
            );
            zoomTrigger.addEventListener("mouseout", (event: MouseEvent) =>
                onMouseLeave(event, e.$el)
            );
            zoomTrigger.addEventListener("mousemove", onMouseMove);
        });
    });
}

export default useSliderZoom;
