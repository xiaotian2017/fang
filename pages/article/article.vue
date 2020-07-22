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
            title: title
        })
    }
}
</script>

<style lang="scss" scoped>

</style>

