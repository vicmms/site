export const PROJECTS = [
    {
        key: 'kiosco',
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
        image: new URL('@/assets/images/projects/autoservicio.gif', import.meta.url).href,
        site: {
            link: '',
            demo: new URL('@/assets/demos/autoservicio.mp4', import.meta.url).href,
        },
        stack: ['vue', 'js', 'laravel', 'java']
    },
    {
        key: 'sct',
        image: new URL('@/assets/images/projects/sct.gif', import.meta.url).href,
        site: {
            link: '',
            demo: new URL('@/assets/demos/sct.mp4', import.meta.url).href,
        },
        stack: ['vue', 'ts', 'sass']
    },
    {
        key: 'webapp',
        image: new URL('@/assets/images/projects/webapp.gif', import.meta.url).href,
        site: {
            link: '',
            demo: new URL('@/assets/demos/webapp.mp4', import.meta.url).href,
        },
        stack: ['vue', 'js', 'figma']
    },
    {
        key: 'chat',
        image: new URL('@/assets/images/projects/chat.gif', import.meta.url).href,
        site: {
            link: 'https://vicmms.github.io/chat-design-vue/',
            demo: '',
        },
        repo: 'https://github.com/vicmms/chat-design-vue',
        stack: ['vue', 'js', 'sass', 'figma']
    },
    {
        key: 'constructora',
        image: new URL('@/assets/images/projects/constructora.gif', import.meta.url).href,
        site: {
            link: '',
            demo: new URL('@/assets/demos/constructora.mp4', import.meta.url).href,
        },
        repo: 'https://github.com/codetives/constructora',
        stack: ['vue', 'js', 'laravel']
    },
]