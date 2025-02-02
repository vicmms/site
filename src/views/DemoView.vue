<template>
    <div v-if="project.site" class="flex flex-col justify-center items-center mt-[10%] px-4 mb-10">
        <div>
            <video width="640" height="360" controls>
                <source :src="project.site.demo" type="video/mp4">
                Tu navegador no soporta la reproducción de video.
            </video>
        </div>
        <div class="flex flex-col justify-center items-center mt-12 mb-10">
            <div class="text-2xl">Este proyecto y su sitio son <span class="pixel-text primary-text uppercase">privados</span>. Se
                muestra un video demo con el funcionamiento básico de la aplicación:</div>
            <ul class="list-disc text-xl mt-10 px-4">
                <!-- kiosk -->
                 <div v-if="$route.query.key == 'kiosco'" class="max-w-[800px]">
                    <li class="py-2">Se selecciona el método de recarga, puede ser con dispositivo NFC o con un documento de identificación</li>
                    <li class="py-2">Se ingresa el id o se escanea el NFC</li>
                    <li class="py-2">Para este demo se usa un simulador de billetes para ingresar saldo a la cuenta</li>
                    <li class="py-2">Finalmente se escanea el NFC para confirmar la recarga o simplemente se le da a continuar si se ingresó dinero por medio de documento de identidad</li>
                    <li class="py-2">¡Listo, la recarga ha sido realizada!</li>
                 </div>
                 <div v-if="$route.query.key == 'autoservicio'" class="max-w-[800px]">
                    <li class="py-2">Se inicia sesión</li>
                    <li class="py-2">Se visualiza el CRUD de usuarios</li>
                    <li class="py-2">Se visualizan productos</li>
                    <li class="py-2">Se sube un archivo simulando la carga de productos</li>
                 </div>
                 <div v-if="$route.query.key == 'sct'" class="max-w-[800px]">
                    <li class="py-2">Se inicia sesión</li>
                    <li class="py-2">Se muestra la pantalla principal con la información del usuario logueado</li>
                    <li class="py-2">Se muestra listado de catálogos</li>
                    <li class="py-2">Se visualiza un catálogo y su CRUD </li>
                    <li class="py-2">Finalmente se muestra el módulo de procedimiento de contrataciones</li>
                 </div>
                 <div v-if="$route.query.key == 'webapp'" class="max-w-[800px]">
                    <li class="py-2">Se inicia sesión</li>
                    <li class="py-2">Se visualiza el QR del usuario que da acceso al evento</li>
                    <li class="py-2">Se visualizan los token disponibles y que sirven para adquirir productos</li>
                    <li class="py-2">Se visualizan las transacciones realizadas por el usuario</li>
                    <li class="py-2">Se cierra sesión</li>
                 </div>
                 <div v-if="$route.query.key == 'constructora'" class="max-w-[800px]">
                    <li class="py-2">Se visualiza el CRUD de empleados</li>
                    <li class="py-2">Se muestran proyectos</li>
                    <li class="py-2">Se muestran los fichajes de entrada y salida</li>
                 </div>
            </ul>
        </div>
        <div class="btn secondary btn-link" @click="$router.push({ name: 'home' })">Regresar</div>
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