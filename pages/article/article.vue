<template>
    <web-view  src="https://uniapp.dcloud.io/static/web-view.html" />
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

        console.log(e)

        this.src = url
        uni.setNavigationBarTitle({
            title,
        })
    }
}
</script>

<style lang="scss" scoped>

</style>

