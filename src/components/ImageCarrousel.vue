<template>
    <div class="carousel-container">
        <carousel-3d :perspective="30" :border="0" :width="585" :height="370" :controls-visible="true" :space="500"
            :clickable="true">
            <slide v-for="(image, i) in images" :index="i" :key="i">
                <img :src="image" />
            </slide>
        </carousel-3d>
    </div>
</template>
<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
    props: ['images'],
    data() {
        return {
            slides: 3
        }
    },
    components: {
        Carousel3d,
        Slide
    }
}
</script>
<style lang="scss">
.carousel-container {
    .left-1 {
        transform: translateX(-500px) translateZ(-400px) rotateY(-0deg) !important;
    }

    .left-2 {
        opacity: 0 !important;
    }

    .right-1 {
        transform: translateX(500px) translateZ(-400px) rotateY(0deg) !important;
    }

    img {
        object-fit: cover;
        height: inherit;
    }

    .next,
    .prev {
        color: white;//var(--contrast);

        span {
            text-shadow:
                -2px -2px 10px var(--secondary-color),
                2px -2px 10px var(--secondary-color),
                -2px 2px 10px var(--secondary-color),
                2px 2px 10px var(--secondary-color);
        }
    }
}
</style>