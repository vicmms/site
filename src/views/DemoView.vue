<template>
    <div v-if="project.site" class="flex justify-center mt-[10%]">
        <video width="640" height="360" controls>
            <source :src="project.site.demo" type="video/mp4">
            Tu navegador no soporta la reproducción de video.
        </video>
    </div>
</template>
<script>
import { PROJECTS } from '@/data';

export default {
    data () {
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