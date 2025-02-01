<template>
    <div class="container mx-auto h-screen">
        <div class="flex flex-col items-start md:items-center mt-[10%] px-4 md:px-0 pb-20">
            <div class="pixel-text primary-text text-7xl">Victor Morales</div>
            <div class="primary-text text-3xl pt-4">Desarrollador Web</div>
            <div class="mt-[5%] mb-8 pixel-text text-white text-5xl section-title flex justify-start w-full">{{
                sectionTitle }}</div>
            <div class="flex flex-col md:flex-row w-full">
                <div class="pr-6 flex md:block justify-center pb-10 md:pb-0">
                    <div class="cursor-pointer img-container"
                        :class="currentSection == SECTIONS.PROJECTS ? 'primary' : 'custom-grey'"
                        @click="currentSection = SECTIONS.PROJECTS">
                        <img src="@/assets/images/folder.png" />
                    </div>
                    <div class="cursor-pointer img-container"
                        :class="currentSection == SECTIONS.ME ? 'primary' : 'custom-grey'"
                        @click="currentSection = SECTIONS.ME">
                        <img src="@/assets/images/avatar.png" />
                    </div>
                    <div class="cursor-pointer img-container"
                        :class="currentSection == SECTIONS.CONTACT ? 'primary' : 'custom-grey'"
                        @click="currentSection = SECTIONS.CONTACT">
                        <img src="@/assets/images/mail.png" />
                    </div>
                </div>
                <div class="text-center grow px-3">
                    <div>
                        <component :is="currentSection.name"></component>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "HomeView",
    data() {
        return {
            SECTIONS: {
                PROJECTS: {
                    name: 'ProjectsComponent',
                    title: 'Proyectos'
                },
                ME: {
                    name: 'MeComponent',
                    title: 'Sobre mi'
                },
                CONTACT: {
                    name: 'ContactComponent',
                    title: 'Contacto'
                }
            },
            currentSection: {},
            sectionTitle: '',
            abortController: null
        }
    },
    components: {
        ProjectsComponent: () => import('@/components/ProjectsComponent.vue'),
        MeComponent: () => import('@/components/MeComponent.vue'),
        ContactComponent: () => import('@/components/ContactComponent.vue')
    },
    methods: {
        async displayTitle() {
            if (this.abortController) {
                this.abortController.abort();
            }

            this.abortController = new AbortController();
            const { signal } = this.abortController;

            const titleArray = this.sectionTitle.split('')
            this.sectionTitle = ''
            for (const titleChar of titleArray) {
                if (signal.aborted) return;
                this.sectionTitle += titleChar;
                await this.delay();
            }
            this.abortController = null;
        },
        delay(ms = 50) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    },
    mounted() {
        this.currentSection = this.SECTIONS.PROJECTS
        this.sectionTitle = this.currentSection.title
        this.displayTitle()
    },
    watch: {
        currentSection() {
            this.sectionTitle = this.currentSection.title
            this.displayTitle()
        }
    }
}
</script>
<style lang="scss" scoped>
.img-container {
    width: 80px;
    height: 80px;
    padding: 10px;
    border-left: 3px solid rgb(54, 58, 66);
    border-bottom: 1px solid rgb(54, 58, 66);
}

.img-container .cv{
    width: 80px;
    height: 80px;
}

.img-container:hover {
    border-left: 3px solid rgb(179, 176, 9);
    border-bottom: 1px solid rgb(179, 176, 9);
    transform: translateX(3px) scale(1.05)
}

.cv-container {
    // background-color: #57cab2;
    width: 80px;
    height: 80px;
}

.section-title {
    letter-spacing: 8px;
}
</style>