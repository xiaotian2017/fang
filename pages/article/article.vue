<template>
    <web-view  :src="src" />
</template>

<script>
export default {
    data() {
        return {
            src: ""
        }
    },
    onLoad(e) {
        let { url, title } = e

        this.src = url
        uni.setNavigationBarTitle({
            title: '文章详情'
        })
    }
}
</script>

<style lang="scss" scoped>

</style>

