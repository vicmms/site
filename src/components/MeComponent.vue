<template>
    <div class="text-2xl px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-20">
            <ImageCarousel :images="meImages" :controls="false" :autoplay="true" :width="300" :height="450" :timeout="2800" :scale="1500" :space="600"/>
            <div class="flex flex-col w-full max-w-[500px] gap-8 justify-center">
                <div class="flex justify-between w-full">
                    <div>
                        {{ $t('app.location') }}:
                    </div>
                    <div class="pixel-text-alt text-4xl contrast-text">
                        Gto, México
                    </div>
                </div>
                <div class="flex justify-between w-full">
                    <div>
                        {{ $t('app.work_experience') }}:
                    </div>
                    <div class="pixel-text-alt text-4xl contrast-text">
                        <span class="primary-text">+</span> {{ yearsExperience }} {{ $t('app.years') }}
                    </div>
                </div>
                <div class="flex justify-between w-full">
                    <div>
                        {{ $t('app.specialization') }}:
                    </div>
                    <div class="pixel-text-alt text-4xl contrast-text">
                        Frontend
                    </div>
                </div>
                <div class="flex justify-between w-full">
                    <div>
                        {{ $t('app.age') }}:    
                    </div>
                    <div class="pixel-text-alt text-4xl contrast-text">
                        {{ age }} {{ $t('app.years') }}
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-10">
             {{ $t('app.about_me') }}
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            meImages: [
                new URL('@/assets/images/me/me1.png', import.meta.url).href,
                new URL('@/assets/images/me/me2.png', import.meta.url).href,
                new URL('@/assets/images/me/me3.png', import.meta.url).href,
                new URL('@/assets/images/me/me4.png', import.meta.url).href,
                new URL('@/assets/images/me/me5.png', import.meta.url).href,

            ],
            currentIndex: 0, 
            currentImage: '',
            intervalId: null, 
            startYear: 2021,
            birthYear: 1997
        }
    },
    components: {
        ImageCarousel: () => import('@/components/ImageCarousel.vue')
    },
    computed: {
        yearsExperience() {
            return new Date().getFullYear() - this.startYear
        },
        age() {
            return new Date().getFullYear() - this.birthYear
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