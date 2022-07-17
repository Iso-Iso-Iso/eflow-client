import { ref, onMounted, Ref, watch, toRef } from "vue";
interface SliderZoomConfig {
    zoomContainerClass?: string;
    activeZoomContainerClass?: string;
    triggerZoomElementClass?: string;
    isZoomActive?: Ref<boolean>;
}

function useSliderZoom(
    slidesForZoom: Ref<HTMLDivElement[]>,
    sliderZoomConfig?: SliderZoomConfig
) {
    const imgOffsetY = ref(0);
    const imgOffsetX = ref(0);
    const currentImageZoomContainer = ref<HTMLDivElement | null>(null);
    const isZoomActive = toRef(sliderZoomConfig as any, "isZoomActive");

    const zoomContainerClass =
        sliderZoomConfig?.zoomContainerClass || "zoom-container";

    const activeZoomContainerClass =
        sliderZoomConfig?.activeZoomContainerClass || "active-zoom";
    const triggerZoomElementClass =
        sliderZoomConfig?.triggerZoomElementClass || "zoom-trigger";

    function renderZoomedImage() {
        if (!currentImageZoomContainer.value || !isZoomActive?.value) return;
        let y = imgOffsetY.value;
        let x = imgOffsetX.value;
        //* Zoom multiple size - 1
        y *= -3;
        x *= -3;

        currentImageZoomContainer.value!.style.transform = `translate(${x}px,${y}px)`;

        window.requestAnimationFrame(renderZoomedImage);
    }

    function startMouseWatch() {
        window.requestAnimationFrame(renderZoomedImage);

        currentImageZoomContainer?.value?.classList.add(
            activeZoomContainerClass
        );
    }
    function stopMouseWatch() {
        currentImageZoomContainer.value?.classList.remove(
            activeZoomContainerClass
        );
    }

    watch(isZoomActive, (newValue) =>
        newValue ? startMouseWatch() : stopMouseWatch()
    );

    function onZoomEndTrack(event: Event, item: HTMLDivElement) {
        if (!event.target) return;

        const innerZoomContainer: HTMLDivElement | null =
            item.querySelector(zoomContainerClass);
        currentImageZoomContainer.value = innerZoomContainer;

        if (!innerZoomContainer || !isZoomActive?.value) return;
        startMouseWatch();
    }

    function onZoomStartTrack(event: Event, item: HTMLDivElement) {
        if (!event.target) return;
        const innerZoomContainer = item.querySelector(zoomContainerClass);
        if (!innerZoomContainer) return;

        stopMouseWatch();
        currentImageZoomContainer.value = null;
    }

    function onMouseMove(event: MouseEvent) {
        imgOffsetX.value = event.offsetX;
        imgOffsetY.value = event.offsetY;
    }
    function onTouchMove(event: TouchEvent, trigger: HTMLDivElement) {
        const rect = trigger.getBoundingClientRect();
        const touch = event.touches[0];

        const isTocuhXAbove = touch.clientX > rect.left + rect.width;
        const isTocuhXBelow = touch.clientX < rect.left;

        if (isTocuhXAbove || isTocuhXBelow) return;

        const isTouchYAbove = touch.clientY > rect.top + rect.height;
        const isTocuhYBelow = touch.clientY < rect.top;
        if (isTouchYAbove || isTocuhYBelow) return;

        imgOffsetX.value = touch.clientX - rect.left;
        imgOffsetY.value = touch.clientY - rect.top;
    }

    onMounted(() => {
        if (slidesForZoom.value.length == 0) return;

        slidesForZoom.value.forEach((e: any) => {
            const zoomTrigger: HTMLDivElement | null = e.$el.querySelector(
                triggerZoomElementClass
            );
            if (!zoomTrigger) return;

            zoomTrigger.addEventListener("mouseover", (event: MouseEvent) =>
                onZoomEndTrack(event, e.$el)
            );
            zoomTrigger.addEventListener("touchstart", (event: TouchEvent) =>
                onZoomEndTrack(event, e.$el)
            );
            zoomTrigger.addEventListener("mouseout", (event: MouseEvent) =>
                onZoomStartTrack(event, e.$el)
            );
            zoomTrigger.addEventListener("touchend", (event: TouchEvent) =>
                onZoomStartTrack(event, e.$el)
            );
            zoomTrigger.addEventListener("mousemove", onMouseMove);

            zoomTrigger.addEventListener("touchmove", (e: TouchEvent) =>
                onTouchMove(e, zoomTrigger)
            );
        });
    });
}

export default useSliderZoom;
