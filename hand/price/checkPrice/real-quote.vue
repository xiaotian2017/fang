<template>
    <view class="real-quote">
        <view class="hand-title">杭州二手房实时行情</view>
        <analysis-list :dataList="quotes" />

        <banner type="adv" />
    </view>
</template>

<script>
import Banner from  "comps/banner"
import AnalysisList from "./analysis-list"

export default {
    data() {
        return {
            quotes: []
        }
    },
    methods: {
        _initData() {
            this.quotes = [
                { title: '成交均价', val: '25880', unit: 'm²' },
                { title: '30天内成交量', val: '1200', unit: '套' },
                { title: '挂牌均价', val: '30000', unit: '元/m²' },
            ]
        }
    },
    created() {
        this._initData()
    },
    components: {
        Banner, AnalysisList
    }
}
</script>


<style lang="scss" scoped>
.real-quote{
    padding: 20rpx 0 30rpx;
}

</style>

