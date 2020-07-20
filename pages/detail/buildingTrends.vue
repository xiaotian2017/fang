<template>
	<view class="building-trends layer">
		<trend-list class="trend-list" v-for="(item,i) in houseNews" :listdata=item :key="i" />
	</view>
</template>

<script>
import TrendList from "./trends/trend-list"
import { mapActions, mapState } from "vuex"
//楼盘动态
export default {
	data() {
		return {
			
		}
	},
	methods: {
		
	},
	computed: {
		...mapState('sDetail', ['houseNews'])
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
