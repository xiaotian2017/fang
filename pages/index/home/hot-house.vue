<template>
    <view class="hot-house">
        <view class="clearfix" >
            <view class="index-tit fl">热门推荐 </view>
            <text class="more fr" @tap="toHotList">查看更多></text>
        </view>      
		
        <house-list :house=topOne />
		<view class="hot-b">
			<HouseVList v-for="(item, i) in houseList" :key="i" :house=item />
		</view>
		
    </view>
</template>

<script>
import HouseList from "@/comps/list/house-list.vue"
import HouseVList from "@/comps/list/house-vlist.vue"

import { getHouseList } from "@/api"

export default {
    data() {
        return {
            topOne: {},
            houseList: []
        }
    },
    methods: {
        toHotList() {
            uni.navigateTo({
                url: '/pages/house/house?type=1',
            })
        }
    },
    created() {
        getHouseList({pageType: 1, pageNum:1, pageSize: 10}).then(data => {
            this.topOne = data.record.slice(0, 1)[0]
            this.houseList = data.record.splice(0,3)
        })
    },
    components: {
        HouseList,
		HouseVList
    }
}
</script>

<style lang="scss" scoped>
.more{
    line-height: 90rpx;
}
.hot-b{
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
}
</style>