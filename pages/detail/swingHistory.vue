<template>
    <view class="swing-history">
        <swing-list v-for="(item, i) in arr" :key="i" />
    </view>
</template>

<script>
import SwingList from "./swing/swing-list"
export default {
    data() {
        return {
            arr: new Array(10)
        }
    },
    components: {
        SwingList
    }
}
</script>

<style lang="scss" scoped>
.swing-history{
    padding-top: 30rpx;
}
</style>


