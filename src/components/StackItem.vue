<template>
    <div class="stack-item flex justify-center items-center" :class="{'item-lg': lg}">
        <img :src="url">
    </div>
</template>
<script>
export default {
    props: {
        item: String,
        lg: Boolean
    },
    computed: {
        url() {
            return require(`@/assets/images/stack/${this.item}.png`);
        }
    }
}
</script>
<style>
.stack-item {
    background-color: #F9F9F9;
    margin: 0px 5px;
    border-left: 2px solid grey;
    border-bottom: 2px solid grey;

}
.stack-item img {
    width: 30px;
    height: 30px;
    object-fit: cover;
}
.item-lg {
    width: 45px !important;
    height: 45px !important;
}
</style>