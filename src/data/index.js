export const PROJECTS = [
    {
        key: 'kiosco',
        title: 'Kiosco de recargas',
        short_description: `
            Kiosco de recargas utilizado en eventos masivos que permite a los usuarios agregar saldo a su cuenta por medio de un lector de billetes integrado 
            y posteriormente escaneando un dispositivo NFC asociado a su cuenta para realizar la recarga.
        `,
        description: `
            Este proyecto se ha desarrollado como una solución para que usuarios puedan recargar saldo en sus cuentas asociadas a eventos. Montado sobre un dispositivo
            con sistema operativo windows, con lector nfc y lector de billetes integrado, el kiosco de recargas permite escanear un dispositivo NFC para identificar al usuario
            y posteriormente permite ingresar saldo a su cuenta por medio de un lector de billetes NV200 integrado, para finalizar el usuario vuelve a escanear su dispositivo NFC
            confirmando la recarga y agregando el nuevo saldo a su cuenta. La interfaz cuenta ademas con una vista para administradores, donde se puede ver la cantidad de dinero en el
            kisoco, configurar alertas y establecer un email de contacto asociado a el kiosco o evento.
        `,
        image: new URL('@/assets/images/projects/kiosco.gif', import.meta.url).href,
        site: {
            link: '',
            demo: new URL('@/assets/demos/kiosco.mp4', import.meta.url).href,
        },
        repo: '',
        stack: ['kotlin', 'java', 'tornado']
    },
    {
        key: 'autoservicio',
        title: 'Panel Multiservicios',
        short_description: `
            Proyecto realizado para una empresa que maneja multiples negocios en un mismo sitio, creando una interfaz administrativa con
            su respectivo soporte montado sobre una API.  
        `,
        description: `
            Panel de administración para una empresa de multiservicios, con catálogos para usuarios, proveedores, productos y marcas,
            registrando además las ordenes de compra para proveedores así como las notas de compra de clientes. Se cuenta con un importador de productos para
            migrar los productos existenetes en un inventario de excel a la base de datos. Para este proyecto se creó una API con Laravel. Proyecto realizado como Freelance.
        `,
        image: new URL('@/assets/images/projects/autoservicio.gif', import.meta.url).href,
        site: {
            link: '',
            demo: new URL('@/assets/demos/autoservicio.mp4', import.meta.url).href,
        },
        stack: ['vue', 'js', 'laravel', 'java']
    },
    {
        key: 'sct',
        title: 'Secretarría de Caminos y Transportes',
        short_description: `
            
        `,
        description: 'Description of project 1',
        image: new URL('@/assets/images/projects/sct.gif', import.meta.url).href,
        link: 'https://example.com/project1',
        stack: ['vue', 'ts', 'sass']
    },
    {
        key: 'webapp',
        title: 'Restyling Webapp',
        short_description: `Tomando como base un proyecto existente, se realizo un rediseño de la interfaz con el fin de 
            mejorar la experiencia de los usuarios. Para este proyecto además se actualizó la versión de vuetify de la 1.5 a la 2.6.
        `,
        description: 'Description of project 4',
        image: new URL('@/assets/images/projects/webapp.gif', import.meta.url).href,
        link: 'https://example.com/project1',
        stack: ['vue', 'js', 'figma']
    },
    {
        key: 'chat',
        title: 'Rediseño de chat empresarial',
        short_description: `Dado un chat empresarial existente, se realizo un rediseño de la interfaz con el fin de mejorar la experiencia de los usuarios. 
            El nuevo diseño se presento primero con mockups realizados en figma para posteriormente implementar la interfaz gráfica.
        `,
        description: 'Description of project 1',
        image: new URL('@/assets/images/projects/chat.gif', import.meta.url).href,
        link: 'https://example.com/project1',
        stack: ['vue', 'js', 'sass', 'figma']
    },
    {
        key: 'constructora',
        title: 'Panel Constructora AC',
        short_description: `Panel de control para empresa de construcción para la gestión de empleados, proyectos y clientes,
            así como la generación de reportes relacionados con los pagos, fichajes de entrada y salida de empleados y avance de obras.
        `,
        description: 'Description of project 1',
        image: new URL('@/assets/images/projects/constructora.gif', import.meta.url).href,
        link: 'https://example.com/project1',
        stack: ['vue', 'js', 'laravel']
    },
]