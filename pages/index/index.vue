<template>
	<view class="layer">
		<top-search :searchKey="searchKey" />
		
		<view class="hr20" />
		
		<banner :list="bannerList" />
		
		<nav-part />
		
		<!-- 头条滚动新闻 -->
		<lead-news />
		<!-- 推荐图层 -->
		<recommend-layer />
		<!-- 热门推荐 -->
		<hot-house />
		<view class="hr30" />
		<!-- 广告条 -->
		<banner :list="advList" height=130  />
		<!-- 最新文章 -->
		<latest-article ref="latestArticle" />

		<auth-dialog v-if="authDialogVisible" />
	</view>
</template>

<script>
import TopSearch from "@/comps/top-search"
import Banner from "@/comps/banner"
import LeadNews from "./home/lead-news.vue"
import RecommendLayer from "./home/recommend-layer"
import LatestArticle from "./home/latest-article.vue"
import HotHouse from "./home/hot-house"
import NavPart from "./home/nav-part"

import AuthDialog from "./home/auth-dialog"
import { dealAuth } from "./js/auth"

export default {
	data() {
		return {
			bannerList: [],
			advList: [],
			test_type: 1,
			searchKey: "",
			authDialogVisible: false
		}
	},
	onLoad() {
		this._initData()

		dealAuth().catch(() => {
			this.authDialogVisible = true
		})
		this.getAdv()
	},
	methods: {
		getAdv() {
			this.$ADV_API.getHomeTop().then(data => {
				this.bannerList = data.adverts
				this.searchKey = data.serachbar && data.serachbar.projectName || ""
			})
			this.$ADV_API.getHomeBot().then(data => {
				this.advList = data.adverts
			})
		},
		getWeChatInfo() {
			
		},
		_initData() {
			
		},
	},
	onReachBottom() {
		this.$refs.latestArticle.getMore()
	},
	components: {
		TopSearch,
		Banner,
		LeadNews, RecommendLayer, LatestArticle, HotHouse, AuthDialog, NavPart
	}
}
</script>

<style lang="scss">
.index-tit{
	font-size: 40rpx; color: #333; margin: 20rpx 0; font-weight: bold;
}
</style>