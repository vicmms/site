<template>
    <div class="text-xl flex flex-col md:flex-row items-center">
        <div class="me-image carousel-container">
            <img class="loading image-carousel" :src="currentImage" :key="currentImage">
        </div>
        <div class="grow p-5">
            Soy un Desarrollador web Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident accusantium
            dolore molestias dicta excepturi repudiandae fugiat sit impedit dolorum dolorem perspiciatis vero, sequi
            numquam esse corporis neque quaerat. Asperiores, illo.
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            meImages: [
                new URL('@/assets/images/me/me1.webp', import.meta.url).href,
                new URL('@/assets/images/me/me2.webp', import.meta.url).href,
                new URL('@/assets/images/me/me3.webp', import.meta.url).href,
                new URL('@/assets/images/me/me4.webp', import.meta.url).href,
                new URL('@/assets/images/me/me5.webp', import.meta.url).href,

            ],
            currentIndex: 0, 
            currentImage: '',
            intervalId: null, 
        }
    },
    methods: {
        startImageChange() {
            this.currentImage = this.meImages[this.currentIndex]

            this.intervalId = setInterval(() => {
                this.currentIndex = (this.currentIndex + 1) % this.meImages.length
                this.currentImage = this.meImages[this.currentIndex]
            }, 5000)
        }
    },
    mounted() {
        this.startImageChange()
    },
    beforeDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  },
}
</script>
<style lang="scss" scoped>
.me-image img{
    min-width: 280px;
    max-width: 280px;
    height: 330px;
    object-fit: cover;
}
</style>