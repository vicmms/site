<template>
    <div class="carousel-container">
        <carousel-3d :inverse-scaling="scale" :width="width" :height="height" :perspective="0" :border="0" :controls-visible="controls" :space="space" :autoplay="autoplay"
            :clickable="true" :autoplay-timeout="timeout" :display="3">
            <slide v-for="(image, i) in images" :index="i" :key="i">
                <img :src="image" />
            </slide>
        </carousel-3d>
    </div>
</template>
<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
    props: {
        images: Array,
        width: {
            type: Number,
            default: 550
        },
        height: {
            type: Number,
            default: 350
        },
        controls: {
            type: Boolean,
            default: true
        },
        autoplay: {
            type: Boolean,
            default: false
        },
        space: {
            type: Number,
            default: 350
        },
        timeout: {
            type: Number,
            default: 5000
        },
        scale: {
            Number,
            default: 200
        }
    },
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
<style lang="scss" scoped>
    .left-1, .right-1 {
        opacity: 0.5 !important;
    }
</style>