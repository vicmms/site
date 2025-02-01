<template>
    <div class="text-xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="(project, i) in PROJECTS" :key="i"  @click="$router.replace({name: 'project', query: {key: project.key}})">
                <ProjectCard :title="project.title" :img="project.image" :description="project.short_description"
                    :stack="project.stack"/>
            </div>
        </div>
    </div>
</template>
<script>
import { PROJECTS } from '@/data'

export default {
    data() {
        return {
            PROJECTS
        }
    },
    components: {
        ProjectCard: () => import('@/components/Projects/ProjectCard.vue')
    }
}
</script>