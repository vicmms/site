import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const userLocale = navigator.language || navigator.userLanguage;
const availableLocales = ['en', 'es'];

const locale = availableLocales.includes(userLocale.split('-')[0]) ? userLocale.split('-')[0] : 'en';


const messages = {
    es: {
        app: {
            web_developer: "Desarrollador web",
            projects: "Proyectos",
            me: "Sobre mí",
            contact: "Contacto",
            get_in_touch: "¡Pongámonos en contacto!",
            download_cv_message: "También puedes descagrgar mi CV para conocer más de mi carrera profesional",
            stack: "Stack",
            disclaimer: `Este proyecto y su sitio son <span class="pixel-text primary-text uppercase">privados</span>. Se
                muestra un video demo con el funcionamiento básico de la aplicación:`,
            location: "Residencia",
            work_experience: "Experiencia laboral",
            specialization: "Especialización",
            age: "Edad",
            years: "Años",
            about_me: `Soy un desarrollador web con gran experiencia trabajando en remoto, participando en proyectos tanto backend 
            como frontend. Pero también soy una persona que disfruta de salir y conocer nuevos lugares, viajar en moto, disfrutar de la naturaleza 
            y llenarme de nuevas experiencias. Siempre buscando la manera de mantener un equilibrio entre mi vida profesional y personal.`
        },
        actions: {
            download_cv: "Descargar CV",
            visit_site: "Ver sitio",
            private_site: "Sitio privado",
            private_project: "Proyecto privado",
            back: 'Regresar'
        },
        projects: {
            kiosco: {
                title: "Kiosco de recargas",
                short_description: `
                Kiosco de recargas utilizado en eventos masivos que permite a los usuarios agregar saldo a su cuenta por medio 
                de un lector de billetes integrado y posteriormente escaneando un dispositivo NFC asociado a su cuenta para 
                realizar la recarga.
                `,
                description: `
                Este proyecto se ha desarrollado como una solución para que usuarios puedan recargar saldo en sus cuentas 
                asociadas a eventos. Montado sobre un dispositivo con sistema operativo windows, con lector nfc y lector de 
                billetes integrado, el kiosco de recargas permite escanear un dispositivo NFC para identificar al usuario y 
                posteriormente permite ingresar saldo a su cuenta por medio de un lector de billetes NV200 integrado, para 
                finalizar el usuario vuelve a escanear su dispositivo NFC confirmando la recarga y agregando el nuevo saldo 
                a su cuenta. La interfaz cuenta además con una vista para administradores, donde se puede ver la cantidad de 
                dinero en el kiosco, configurar alertas y establecer un email de contacto asociado al kiosco o evento.
                `,
                demo_steps: [
                    `Se selecciona el método de recarga, puede ser con dispositivo NFC o con un documento de identificación`,
                    `Se ingresa el id o se escanea el NFC`,
                    `Para este demo se usa un simulador de billetes para ingresar saldo a la cuenta`,
                    `Finalmente se escanea el NFC para confirmar la recarga o simplemente se le da a continuar si se ingresó dinero por medio de documento de identidad`,
                    `¡Listo, la recarga ha sido realizada!`
                ]

            },
            autoservicio: {
                title: "Panel Multiservicios",
                short_description: `
                Proyecto realizado para una empresa que maneja multiples negocios en un mismo sitio, creando una interfaz 
                administrativa con su respectivo soporte montado sobre una API.
                `,
                description: `
                Panel de administración para una empresa de multiservicios, con catálogos para usuarios, proveedores, productos y marcas,
            registrando además las órdenes de compra para proveedores así como las notas de compra de clientes. Se cuenta con un importador de productos para
            migrar los productos existentes en un inventario de excel a la base de datos. Para este proyecto se creó una API con Laravel. Proyecto realizado como Freelance.
                `,
                demo_steps: [
                    `Se inicia sesión`,
                    `Se visualiza el CRUD de usuarios`,
                    `Se visualizan productos`,
                    `Se sube un archivo simulando la carga de productos`
                ]

            },
            constructora: {
                title: "Panel Constructora AC",
                short_description: `
                Panel de control para empresa de construcción para la gestión de empleados, proyectos y clientes,
                así como la generación de reportes relacionados con los pagos, fichajes de entrada y salida de empleados y avance de obras.
                `,
                description: `
                Proyecto como freelancer que consta de un panel de control para empresa de construcción para la gestión de empleados, proyectos y clientes.
                Dentro del panel se pueden generar reportes generales, conceptos de obra y bitácoras de entrada y salida de empleados y exportar la información a excel.
                Para este proyecto se desarrolló una API con Laravel.
                `,
                demo_steps: [
                    `Se visualiza el CRUD de empleados`,
                    `Se muestran proyectos`,
                    `Se muestran los fichajes de entrada y salida`
                ]
            },
            sct: {
                title: "Secretaría de Comunicaciones y Transportes",
                short_description: `
                Migración del sistema de Secretaría de Comunicaciones y Transportes basado en Progress, a una nueva aplicación web, aplicando una reingeniería 
                a más de 20 módulos existentes.
                `,
                description: `
                Proyecto de reingeniería para migrar el sistema en Progress de la Secretaría de Comunicaciones y Transportes del gobierno de México. 
                Se trabajó específicamente sobre los módulos relacionados con la Secretaría de Administración de Obra Pública en donde se crearon más de 15 catálogos 
                y 20 módulos enfocados a la gestión de proyectos federales.
                `,
                demo_steps: [
                    `Se incia sesión`,
                    `Se muestra la pantalla principal con la información del usuario logueado`,
                    `Se muestra listado de catálogos`,
                    `Se visualiza un catálogo y su CRUD`,
                    `Finalmente se muestra el módulo de procedimiento de contrataciones`
                ]
            },
            webapp: {
                title: 'Restyling Webapp',
                short_description: `Tomando como base un proyecto existente, se realizó un rediseño de la interfaz con el fin de 
                    mejorar la experiencia de los usuarios. Para este proyecto fue necesario actualizar la versión de vuetify de la 1.5 a la 2.6.
                `,
                description: `
                    Se desarrolló una actualización de diseño de un proyecto existente desarrollado con Vue2, tomando como base un mockup proporcionado en figma.
                    Para esta actualización fue necesario actualizar la versión de vuetify de la 1.5 a la 2.6 por lo que se actualizaron dependencias
                    y componentes existentes. El rediseño fue enfocado principalmente a dispositivos móviles.
                `,
                demo_steps: [
                    `Se inicia sesión`,
                    `Se visualiza el QR del usuario que da acceso al evento`,
                    `Se visualizan los token disponibles y que sirven para adquirir productos`,
                    `Se visualizan las transacciones realizadas por el usuario`,
                    `Se cierra sesión`
                ]
            },
            chat: {
                title: 'Rediseño de chat empresarial',
                short_description: `Dado un chat empresarial existente, se realizó un rediseño de la interfaz con el fin de mejorar la experiencia de los usuarios. 
                    El nuevo diseño se presento primero con mockups realizados en figma para posteriormente implementar la interfaz gráfica.
                `,
                description: `Para este proyecto se planteó como reto realizar una propuesta de diseño para renovar la interfaz de un chat empresarial existente.
                    Se realizó una propuesta como mockup en figma y una vez aceptada se continuó con el desarrollo de la interfaz gráfica. Proyecto realizado como Freelancer.
                `
            }
        }
    },
    en: {
        app: {
            web_developer: "Web Developer",
            projects: "Projects",
            me: "About me",
            contact: "Contact",
            get_in_touch: "Let's get in touch!",
            download_cv_message: "You can also download my CV to know more about my professional career",
            stack: "Stack",
            disclaimer: `This project and its website are <span class="pixel-text primary-text uppercase">private</span>. 
            It shows a video demo with the basic functionality of the application:`,
            location: "Location",
            work_experience: "Work experience",
            specialization: "Specialization",
            age: "Age",
            years: "Years",
            about_me: `
                I am a web developer with extensive experience working remotely, participating in both backend projects 
            as frontend. But I am also a person who enjoys going out to see new places, traveling by motorcycle, enjoying nature. 
            and fill me with new experiences. Always looking for a way to maintain a balance between my professional and personal life.`
        },
        actions: {
            download_cv: "Download CV",
            visit_site: "Visit site",
            private_site: "Private site",
            private_project: "Private project",
            back: 'Go back'
        },
        projects: {
            kiosco: {
                title: "Recharge kiosco",
                short_description: `
                Recharge kiosco used in mass events that allows users to add funds to their accounts by 
                scanning a NFC reader and then scanning a device NFC associated to their account to 
                perform the recharge.
                `,
                description: `
                This project has been developed as a solution for users to recharge their accounts in their associated events. 
                Mounted on a device with windows operating system, with nfc reader and integrated bill reader, the recharge kiosco 
                allows scanning a device NFC to identify the user and then allows to add funds to their account by scanning a 
                bill reader NV200 integrated, to finalize the user returns to scan their device NFC confirming the recharge and 
                adding the new balance to their account. The interface also has a view for administrators, where they can see the 
                amount of money in the kisoco, configure alerts and establish a contact email associated to the kiosco or event.
                `,
                demo_steps: [
                    `The recharge method is selected, it can be with an NFC device or with an identification document`,
                    `The ID is entered or the NFC is scanned`,
                    `For this demo a bill simulator is used to add balance to the account`,
                    `Finally, the NFC is scanned to confirm the recharge or you are simply asked to continue if money was deposited by means of an identification document.`,
                    `Ready, the recharge has been done!`
                ]
            },
            autoservicio: {
                title: "Multiservice panel",
                short_description: `
                Project carried out for a company that manages multiple businesses in the same place, creating an interface 
                administrative with its respective support mounted on an API.
                `,
                description: `
                Administration panel for a multiservice company, with catalogs for users, suppliers, products and brands,
                also recording purchase orders for suppliers as well as customer purchase notes. There is an importer of products for
                Migrate existing products in an Excel inventory to the database. For this project an API was created with Laravel. Project carried out as Freelance.
                `,
                demo_steps: [
                    `Log in`,
                    `The CRUD of users is displayed`,
                    `Products are displayed`,
                    `A file is uploaded simulating the loading of products`
                ]
            },
            constructora: {
                title: "Constructora AC panel",
                short_description: `
                Control panel for construction company for the management of employees, projects and clients,
                as well as the generation of reports related to payments, fichajes of entry and exit of employees and projects progress.
                `,
                description: `
                Project as freelancer that consists of a control panel for construction company for the management of employees, projects and clients.
                Within the panel can be generated general reports, concepts of the project and logs of entry and exit of employees and export information to excel.
                For this project a API was created with Laravel.
                `,
                demo_steps: [
                    `The CRUD of employees is displayed`,
                    `The projects are shown in the panel`,
                    `The logs of entry and exit of employees are displayed`
                ]
            },
            sct: {
                title: "SCT panel",
                short_description: `  
                Migration of the Ministry of Communications and Transportation system based on Progress, to a new web application, applying reengineering 
                to more than 20 existing modules.
                `,
                description: `
                Reengineering project to migrate the system in Progress of the Ministry of Communications and Transportation of the government of Mexico. 
                We specifically worked on the modules related to the Public Works Administration Secretariat where more than 15 catalogs were created. 
                and 20 modules focused on federal project management.
                `,
                demo_steps: [
                    `Log in`,
                    `The main screen is displayed with information about the logged-in user`,
                    `The list of catalogs is displayed`,
                    `A catalog and and its CRUD are displayed`,
                    `Finally, the module of contracting procedures is displayed`
                ]
            },
            webapp: {
                title: "Webapp restyling",
                short_description: `
                Based on an existing project, a redesign of the interface was carried out in order to 
                improve user experience. For this project it was necessary to update the vuetify version from 1.5 to 2.6.
                `,
                description: `
                A design update was developed for an existing project developed with Vue2, based on a mockup provided in figma.
                For this update it was necessary to update the vuetify version from 1.5 to 2.6, so dependencies were updated
                and existing components. The redesign was focused mainly on mobile devices.
                `,
                demo_steps: [
                    `Log in`,
                    `The QR of the user who gives access to the event is displayed`,
                    `The available tokens are displayed and are used to purchase products.`,
                    `Transactions made by the user are displayed`,
                    `Logout`
                ]
            },
            chat: {
                title: "Redesign of business chat",
                short_description: `
                Based on an existing business chat, a redesign of the interface was carried out in order to improve user experience. 
                The new design was presented first with mockups made in figma and then implemented the graphical interface.
                `,
                description: `
                For this project it was proposed as a challenge to develop a design proposal to renew the interface of an existing business chat.   
                A mockup was made in figma and once accepted it was continued with the development of the graphical interface. Project carried out as Freelancer.
                `
            }
        }
    },

};

const i18n = new VueI18n({
    locale, // Idioma por defecto
    fallbackLocale: 'en', // Idioma de respaldo
    messages,
});

export default i18n;