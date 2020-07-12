<template>
	<view class="house-layout fz">
		<wrap>
			<top-search />
			<view class="hr20" />
			<banner type='adv' />
		</wrap>
		
		
		<filter-box />
		<wrap>
			<house-list  v-for="(item,i) in houselist" :key="i" :house=item  />
		</wrap>
	</view>
</template>

<script>
import TopSearch from "@/comps/top-search"
import Banner from "@/comps/banner"
import FilterBox from "./house/filter-box"
import HouseList from "@/comps/list/house-list.vue"

import { getHouseList } from "@/api"

export default {
	data() {
		return {
			houselist: [
				
			]
		}
	},
	methods: {
		
	},
	computed: {
		
	},
	onLoad(e) {
		getHouseList().then(data=>{
			console.log(data);
			this.houselist = data.record
		})
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

