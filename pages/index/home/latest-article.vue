<template>
	<view>
		<scroll-view class="tab-wrap" scroll-x="true" scroll-with-animation>
			<view 	v-for="(tab, i) in tabList" 
					:class="{active: i==activeIndex}" 
					:key="i" :id="tab.id"  
					@click="tabClick(i)"
					class="tab-list scroll-view-item">{{tab.text}}</view>
		</scroll-view>
		<article-list v-for="(item, i) in tabList[activeIndex].listData" :key="i" />
	</view>
</template>

<script>
import ArticleList from "@/comps/list/article-list"
import { getNewsType, getNewsList } from "@/api"

export default {
	data() {
		return {
			tabList: [
				{ text: '最新文章', id: 'd1'},
				{ text: '摇号指南', id: 'd2'},
				{ text: '乐米问答', id: 'd3'},
				{ text: '乐米评盘', id: 'd4'},
				{ text: '乐米情报', id: 'd5'},
				{ text: '最新文章', id: 'd6'},
			],
			activeIndex: 0
		};
	},
	methods: {
		tabClick(index) {
			this.activeIndex = index
			this.getList()
		},
		getTypes() {
			getNewsType().then(data => {
				this.tabList = data
				this.getList()
			})
		},
		getList() {
			if(!this.tabList[this.activeIndex].listData) {
				getNewsList().then(data => {
					this.tabList[this.activeIndex].listData = data.record
				})
			}
		}
	},
	created() {
		this.getTypes()
	},
	components:{
		 ArticleList
	}
}
</script>

<style lang="scss">
.tab-wrap{
	height: 100rpx; white-space: nowrap;
}
.tab-list{
	display: inline-block; margin-right: 40rpx; line-height: 100rpx; 
	&.active{
		font-size: 36rpx; font-weight: bold;
	}
}
</style>
