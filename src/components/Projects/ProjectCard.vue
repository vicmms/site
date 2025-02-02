<template>
    <div class="project-card cursor-pointer flex flex-col box b">
        <div class="card-title flex justify-between">
            <div class="text-lg md:text-xl text">{{ $t(`projects.${id}.title`) }}</div>
            <div class="flex">
                <div class="window-icon">_</div>
                <div class="window-icon">X</div>
            </div>
        </div>
        <div class="card-img image-container mt-4">
            <img :src="img">
        </div>
        <div class="px-4 pt-4 pb-2 flex flex-col grow">
            <div class="text-left mb-2 grow card-description">{{ $t(`projects.${id}.short_description`) }}</div>
            <div class="text-right p-3 flex justify-end align-center">
                <div class="pixel-text text-xl contrast-text pr-2">Stack:</div>
                <div v-for="item in stack" :key="item">
                    <StackItem :item="item" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        id: String,
        img: String,
        stack: Array
    },
    components: {
        StackItem: () => import('../StackItem.vue')
    }
}
</script>
<style lang="scss">
.project-card {
    border: 1px solid var(--custom-grey);
    height: 530px;
}

.card-img img {
    width: 100%;
    height: 250px;
    object-fit: contain;
}

.card-title {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    font-weight: bold;
    text-align: left;
    padding: 3px 8px;
    .text {
        white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    }
}

.card-description {
    max-height: 150px;
    overflow-y: auto;
}

.window-icon {
    background-color: var(--secondary-color);
    color: var(--contrast);
    margin: 0px 2px;
    font-size: 15px;
    padding: 0px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box:hover {
    --border-angle: 0deg;
    animation: border-angle-rotate 2s infinite linear;
    border: 0.1rem solid transparent;

    &.b {
        background: linear-gradient(var(--secondary-color), var(--secondary-color)) padding-box,
            conic-gradient(from var(--border-angle),
                var(--contrast),
                var(--secondary-color)) border-box;
    }
}

@keyframes border-angle-rotate {
    from {
        --border-angle: 0deg;
    }

    to {
        --border-angle: 360deg;
    }
}

@property --border-angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
}
</style>