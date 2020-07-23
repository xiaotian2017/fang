<template>
    <view class="find-house">
        <filter-box v-model="filterVisible" />
    </view>
</template>

<script>
import FilterBox from "./findHouse/filter-box"

export default {
    data() {
        return {
            filterVisible: false
        }
    },
    components: {
        FilterBox
    }
}
</script>

<style lang="scss" scoped>

</style>

