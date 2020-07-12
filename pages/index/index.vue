<template>
	<view class="layer">
		<top-search />
		
		<view class="hr20" />
		
		<banner :list="bannerList" />
		
		<view class="nav-list clearfix">
			<!--这里找四个icon-->
			<view class="n-list" v-for="(nav,ni) in navList" :key="ni" @tap="toHouse(nav)">
				<uni-icons v-if="nav.icon" class="icon" color="#1296db" size="26" :type="nav.icon" />
				<view v-else class="number" :style="{background: nav.color}">{{nav.number}}</view>
				<view class="tit">{{nav.name}}</view>
			</view>
		</view>
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
		<latest-article />

	</view>
</template>

<script>
	import TopSearch from "@/comps/top-search"
	import Banner from "@/comps/banner"
	import LeadNews from "./home/lead-news.vue"
	import RecommendLayer from "./home/recommend-layer"
	import LatestArticle from "./home/latest-article.vue"
	import HotHouse from "./home/hot-house"

	import { mapActions } from 'vuex'

	export default {
		data() {
			return {
				navList: [
					{ name:'热门楼盘', number: '90', color: "#f34949" },
					{ name:'即将开盘', number: '80', color: "#495df3d1"},
					{ name:'正在公示', number: '23', color: "#19be6b"},
					{ name:'正在登记', number: '36', color: '#beb219' },
					{ name:'摇号查询', icon: 'contact' },
					{ name:'二手房查价', icon: 'contact' },
					{ name:'不限购房产', icon: 'contact' },
					{ name:'乐米文章', icon: 'contact' },
					{ name:'乐米家居', icon: 'contact' },
					{ name:'乐米金融', icon: 'contact' },
					{ name:'乐米生活', icon: 'contact' },
					{ name:'我要加群', icon: 'contact' },
				],
				bannerList: [],
				advList: [],
				test_type: 1
			}
		},
		onLoad() {
			this._initData()
			this.getHomeAdv()
			this.getHomeBrandList()
			this.getNewsList()
		},
		methods: {
			getWeChatInfo(e) {
				console.log(e)
			},
			_initData() {
				this.bannerList = [
					{ src: '../static/list/product1.jpg' },
					{ src: '../static/list/product2.png' },
					{ src: '../static/list/product1.jpg' },
				]
				this.advList = [
					{ src: '../static/list/adv.png' }
				]
			},
			toHouse(item) {
				uni.navigateTo({
					url: '/pages/house/house'
				})
			},
			...mapActions([
                'getHomeAdv', 'getHomeBrandList','getNewsList'
            ])
		},
		components: {
			TopSearch,
			Banner,
			LeadNews, RecommendLayer, LatestArticle, HotHouse
		}
	}
</script>

<style lang="scss">
.layer{
	padding-top: 30rpx;
}
.nav-list{
	margin-top: 40rpx;
	.n-list{
		width: 25%; float:left;  text-align: center; margin: 12rpx 0;
		.icons{
			font-size: 20rpx;
		}
		.number{
			width: 100rpx; height: 100rpx; line-height: 100rpx; border-radius: 100%;  display: inline-block; 
			font-size: 40rpx; color: #fff; font-weight: 500;
		}
		.tit{
			margin-top: 10rpx;
		}
	}
}
</style>
<style lang="scss">
.index-tit{
	font-size: 40rpx; color: #333; margin: 20rpx 0; font-weight: bold;
}
</style>