<template>
	<view class="layer">
		<search />
		<banner />
		
		<view class="nav-list clearfix">
			<view class="n-list" v-for="(nav,ni) in navList" :key="ni">
				<uni-icons v-if="nav.icon" class="icon" color="#1296db" size="26" :type="nav.icon" />
				<view v-else class="number" :style="{background: nav.color}">{{nav.number}}</view>
				<view class="tit">{{nav.name}}</view>
			</view>
		</view>
		
		<lead-news />
		<recommend-layer />

		<article-list />
	</view>
</template>

<script>
	import Search from "@/comps/search"
	import Banner from "@/comps/banner"
	import LeadNews from "./lead-news.vue"
	import RecommendLayer from "./recommend-layer"
	import ArticleList from "@/comps/article-list"

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
				
			}
		},
		onLoad() {

		},
		methods: {

		},
		components: {
			Search,
			Banner,
			LeadNews,RecommendLayer, ArticleList
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
