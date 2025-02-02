<template>
    <div>
        <div class="text-3xl">{{ $t('app.get_in_touch') }}</div>
        <a class="flex justify-center items-center cursor-pointer py-10" href="mailto:victormmsauz@gmail.com">
            <div class="text-2xl md:text-5xl pixel-text">victormmsauz@gmail.com</div>
            <img class="w-[40px] h-[40px] mx-2 mt-2" src="@/assets/images/open_new.png" alt="">
        </a>
        <div class="py-3 text-xl">{{ $t('app.download_cv_message') }}</div>
        <div class="flex justify-center items-center mt-3">
            <div class="cv-btn flex justify-center items-center mb-10 cursor-pointer" @click="downloadCv()">
                <div class="text-4xl font-bold pixel-text">{{ $t('actions.download_cv') }}</div>
                <img class="pl-3" src="@/assets/images/cv.png" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        downloadCv() {
            const url = this.$i18n.locale === 'es' ? new URL('@/assets/cv/victor_morales_cv.pdf', import.meta.url).href : new URL('@/assets/cv/victor_morales_resume.pdf', import.meta.url).href
            const link = document.createElement('a');
            link.href = url
            link.download = `victor_morales_cv_${this.$i18n.locale}.pdf`;
            link.click();
        }
    }
}
</script>
<style>
.cv-btn {
    min-width: 200px;
    padding: 10px 40px;
    background-color: white;
    color: var(--secondary-color);
}
.cv-btn:hover {
    color: white;
    background-color: var(--primary-color);
}
</style>