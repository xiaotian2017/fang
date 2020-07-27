<template>
    <view class="check-top">
        <uni-search-bar :radius="100" class="search-bar" @cancel="search" @confirm="search" placeholder="输入楼盘、小区名查询" ></uni-search-bar>

        <analysis-list :dataList="analysisData" />
    </view>
</template>

<script>
import AnalysisList from "./analysis-list"
import uniSearchBar from '@/components/uni-search-bar/uni-search-bar'

export default {
    data() {
        return {
            analysisData: []
        }
    },
    methods: {
        search() {

        },
        _initData() {
            this.analysisData = [
                { title: '今日成交', val: '149', unit: '套' },
                { title: '今日挂牌', val: '10', unit: '套' },
                { title: '二手库存', val: '120098', unit: '套' },
            ]
        }
    },
    created() {
        this._initData()
    },
    components: {
        AnalysisList, uniSearchBar
    }
}
</script>

<style lang="scss" scoped>
.search-bar{
    position: fixed; width:100%; z-index: 10; background: #fff; left:0; top:0;
}
.check-top{
    padding-top: 120rpx;
}
</style>
