<template>
    <div v-if="project.site" class="flex flex-col justify-center items-center mt-[10%] px-4 mb-10">
        <div>
            <video width="640" height="360" controls>
                <source :src="project.site.demo" type="video/mp4">
                Tu navegador no soporta la reproducción de video.
            </video>
        </div>
        <div class="flex flex-col justify-center items-center mt-12 mb-10">
            <div class="text-2xl" v-html="$t(`app.disclaimer`)"></div>
            <ul class="list-disc text-xl mt-10 px-4">
                 <div class="max-w-[800px]">
                    <li class="py-2" v-for="(txt, i) in $t(`projects.${project.key}.demo_steps`)" :key="i">{{ txt }}</li>
                 </div>
            </ul>
        </div>
        <div class="btn secondary btn-link" @click="$router.push({ name: 'home' })">{{ $t(`actions.back`) }}</div>
    </div>
</template>
<script>
import { PROJECTS } from '@/data';

export default {
    data() {
        return {
            project: {}
        }
    },
    mounted() {
        const projectKey = this.$route.query.key
        this.project = PROJECTS.find(project => project.key === projectKey)
    }
}
</script>