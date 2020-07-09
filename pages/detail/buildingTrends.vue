<template>
	<view class="building-trends layer">
		<trend-list class="trend-list" v-for="(item,i) in arr" :key="i" />
	</view>
</template>

<script>
import TrendList from "./trends/trend-list"
//楼盘动态
export default {
	data() {
		return {
			arr: [ 0,0,0,0,0 ],
			temp: {
				dateWord: '2020年2月20日 置业顾问-静静',
				title: '悦府交付在即',
				title: '即将交付啦'
			}
		}
	},
	methods: {
		
	},
	onLoad() {
		uni.setNavigationBarTitle({
		　　title:'动态'
		})
	},
	components: {
		TrendList
	}
}
</script>

<style lang="scss">
.building-trends{
	padding-top: 30rpx;
}
</style>
