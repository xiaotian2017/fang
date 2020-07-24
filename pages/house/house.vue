<template>
	<view class="house-layout fz" :class="{fixed: filterDownVisible}">
		<wrap>
			<top-search :searchKey=searchKey  />
			<view class="hr20" />
			<banner type='adv' :list=bannerList />
		</wrap>
		
		<filter-box @getFilterParmas="getFilterParmas" v-model="filterDownVisible" />
		<wrap>
			<house-list  v-for="(item,i) in dataList" :key="i" :house=item  />
		</wrap>
	</view>
</template>

<script>
import TopSearch from "@/comps/top-search"
import Banner from "@/comps/banner"
import FilterBox from "./house/filter-box"
import HouseList from "@/comps/list/house-list.vue"
import SearchBox from "./house/search-box"
import HouseMixins from "./js/houseMixins"


import { LIST_TYPE } from "common/js/config"

export default {
	data() {
		return {
			bannerList: [],
			searchKey: "",
		}
	},
	mixins: [ HouseMixins ],
	methods: {
		
	},
	components: {
		Banner,FilterBox,TopSearch,HouseList,SearchBox
	}
}
</script>

<style lang="scss" scoped>
.house-layout{
	padding-top: 30rpx; 
	&.fixed{
		position: fixed; width: 100%;
	}
	.top-search{
		margin: 0 $gap;
	}
}
</style>

