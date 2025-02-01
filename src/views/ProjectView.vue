<template>
    <div class="mt-[10%]">
        <div class="px-10">
            <ImageCarrousel :images="images" />
        </div>
        <div class="flex flex-col justify-center items-center px-4">
            <div class="text-6xl pixel-text primary-text py-4">{{ project.title }}</div>
            <div class="text-2xl py-2 project-description">{{ project.description }}</div>
            <div class="flex flex-col md:flex-row items-center mt-10 justify-between w-full px-[10%] mb-10">
                <div class="flex flex-col md:flex-row">
                    <div class="btn secondary btn-link" @click="$router.push({ name: 'home' })">Regresar</div>
                    <div class="tooltip">
                        <div class="btn primary btn-link" :class="{ disabled: !project.site }"
                            @click="openNewTab(project.site.link, project.site.demo)">Ver sitio</div>
                        <span v-if="!project.site" class="tooltiptext">Sitio privado</span>
                    </div>
                    <div class="tooltip">
                        <div class="btn primary btn-link text-center flex justify-center"
                            :class="{ disabled: !project.repo }" @click="openNewTab(projectrepo)">
                            <img src="@/assets/images/gh.png" alt="">
                            <span v-if="!project.repo" class="tooltiptext">Proyecto privado</span>
                        </div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="pixel-text text-xl contrast-text pr-2">Stack:</div>
                    <div v-for="item in project.stack" :key="item">
                        <StackItem :item="item" lg />
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import { PROJECTS } from '@/data';
export default {
    data() {
        return {
            project: {},
            images: [],
        }
    },
    components: {
        ImageCarrousel: () => import('@/components/ImageCarrousel.vue'),
        StackItem: () => import('@/components/StackItem.vue')
    },
    methods: {
        openNewTab(url, demo) {
            if (demo) {
                this.$router.push({ name: 'demo', query: { key: this.$route.query.key } })
            } else {
                window.open(url, '_blank');
            }
        }
    },
    mounted() {
        const projectKey = this.$route.query.key
        this.project = PROJECTS.find(project => project.key === projectKey)

        const imagesContext = require.context('@/assets/images/projects', false, /\.(png|jpe?g|svg)$/);
        this.images = imagesContext.keys()
            .filter(img => img.includes(projectKey))
            .map(img => imagesContext(img));
    }
}
</script>
<style lang="scss">
.project-description {
    max-width: 1100px;
    text-align: center;
}

.btn-link {
    display: flex;
    align-items: center;
    height: 60px;
    font-size: 32px;

    img {
        width: 50px;
        height: 50px;
    }
}

.disabled {
    opacity: 0.7;
    cursor: not-allowed;
    pointer-events: none;
}
</style>