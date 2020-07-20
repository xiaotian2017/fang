<template>
    <image class="img" :src=url :mode="mode" :class="{radius: status=='radius'}">
</template>

<script>
export default {
    props: {
        mode: {
            //scaleToFill https://uniapp.dcloud.io/component/image?id=image
            default: 'widthFix'
        },
        src: {
            default: '../../static/list/product2.png'
        },
        type: {

        },
        status: {}
    },
    computed: {
        url(){
            if(this.type) return `../../static/list/${this.type}`
            if(this.src) return this.src
        }
    }
}
</script>

<style lang="scss" scoped>
.img{
    width: 100%; height: 100%; display: inline-block;
    &.radius{
        border-radius: 100%;
    }
}
</style>
