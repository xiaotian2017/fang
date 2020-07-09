<template>
	<view class="house-layout fz">
		<wrap>
			<top-search />
			<view class="hr20" />
			<banner type='adv' />
		</wrap>
		
		
		<filter-box />
		<wrap>
			<house-list />
			<house-list />
			<house-list />
			<house-list />
			<house-list />
			<house-list />
			<house-list />
			<house-list />
		</wrap>
	</view>
</template>

<script>
import TopSearch from "@/comps/top-search"
import Banner from "@/comps/banner"
import FilterBox from "./house/filter-box"
import HouseList from "@/comps/list/house-list.vue"
import { mapActions } from 'vuex'

export default {
	data() {
		return {

		}
	},
	methods: {
		...mapActions(['getHouseList'])
	},
	computed: {

	},
	onLoad(e) {
		console.log(e)
		this.getHouseList()
	},
	components: {
		Banner,FilterBox,TopSearch,HouseList
	}
}
</script>

<style lang="scss" scoped>
.house-layout{
	padding-top: 30rpx; 
	.top-search{
		margin: 0 $gap;
	}
}
</style>

