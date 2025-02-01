<template>
    <div>
        <div class="text-3xl">¡Pongamonos en contacto!</div>
        <div class="flex justify-center items-center cursor-pointer py-10">
            <div class="text-2xl md:text-5xl pixel-text">victormmsauz@gmail.com</div>
            <img class="w-[40px] h-[40px] mx-2 mt-2" src="@/assets/images/open_new.png" alt="">
        </div>
        <div class="py-3 text-xl">También puedes descagrgar mi CV para conocer más de mi carrera profesional</div>
        <div class="flex justify-center items-center cursor-pointer mt-3">
            <div class="cv-btn flex justify-center items-center mb-10">
                <div class="text-4xl font-bold pixel-text">Descargar CV</div>
                <img class="pl-3" src="@/assets/images/cv.png" />
            </div>
        </div>
    </div>
</template>
<script>
export default {

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