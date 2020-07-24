<template>
	<view class="house-layout fz">
		<search-box @confirmSearch="confirmSearch" />
		
		<wrap>
			<view v-if="houselist.length==0">数据为空，换个关键词搜索看看</view>
			<house-list v-else v-for="(item,i) in houselist" :key="i" :house=item  />
		</wrap>
	</view>
</template>

<script>
import TopSearch from "@/comps/top-search"
import Banner from "@/comps/banner"
import FilterBox from "./house/filter-box"
import HouseList from "@/comps/list/house-list.vue"
import SearchBox from "./house/search-box"
import ListMixins from "common/js/listMixins"

import { getHouseList } from "@/api"

export default {
	data() {
		return {
			bannerList: [],
			searchKey: "",
			houselist: [],
			total: 0,
			keyword: null
		}
	},
	mixins: [ ListMixins ],
	methods: {
		confirmSearch(key) {
			this.keyword = key
			this.houselist = [] 
			this.pageNum = 1
			this._getList()
		},
		getAdv() {
			this.$ADV_API.getList(this.pageType).then(data => {
				this.bannerList = data.adverts
				this.searchKey = data.serachbar.projectName
			})
		}
	},
	computed: {
		searchBoxVisible() {
			return !!this.keyword && !this.pageType
		}
	},
	onReachBottom() {
		if(this.searchParams.pageNum < this.maxPages) {
			this.searchParams.pageNum++
			this._getList()
		}
	},
	onLoad(e) {
		let { type } = e

		this.pageType = type

		this.pageSize = 10
		this.pageNum = 1
		this._getList()

		this.getAdv()
	},
	components: {
		Banner,FilterBox,TopSearch,HouseList,SearchBox
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

