<template>
	<view class="house-layout fz" :class="{fixed: filterDownVisible}">
		<wrap>
			<top-search :searchKey=searchKey  />
			<view class="hr20" />
			<banner type='adv' :list=bannerList />
		</wrap>
		
		<filter-box @getFilterParmas="getFilterParmas" v-model="filterDownVisible" />
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
import SearchBox from "./house/search-box"

import { getHouseList } from "@/api"
import { LIST_TYPE } from "common/js/config"

export default {
	data() {
		return {
			bannerList: [],
			searchKey: "",
			houselist: [],
			total: 0,
			keyword: null,
			filterDownVisible: false
		}
	},
	methods: {
		getFilterParmas(params) {
			this.filterParams = params
			this._getList()
		},
		confirmSearch(key) {
			console.log(key)
			this.keyword = key
		},
		_getList() {
			getHouseList({ ...this.searchParams, ...this.filterParams }).then(data=>{
				let { totalNum, pageSize, record } = data

				if(this.total == 0) this.maxPages = Math.ceil(totalNum/pageSize)

				this.houselist = this.houselist.concat(record)
			})
		},
		getAdv() {
			console.log(this.pageType)
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

		this.searchParams = {
			pageType: LIST_TYPE[type],
			pageNum: 1,
			pageSize: 4
		}

		//搜索框
		this.filterParams = {}
		this._getList()

		this.getAdv()
	},
	created() {
		console.log('1123')
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
		position: fixed;
	}
	.top-search{
		margin: 0 $gap;
	}
}
</style>

