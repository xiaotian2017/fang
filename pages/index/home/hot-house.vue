<template>
    <view class="hot-house">
        <view class="clearfix" >
            <view class="index-tit fl">热门推荐 </view>
            <text class="more fr">查看更多></text>
        </view>      
		
        <house-list />
		<view class="hot-b">
			<HouseVList/>
			<HouseVList/>
			<HouseVList/>
		</view>
		
    </view>
</template>

<script>
import HouseList from "@/comps/list/house-list.vue"
import HouseVList from "@/comps/list/house-vlist.vue"

export default {
    components: {
        HouseList,
		HouseVList,
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