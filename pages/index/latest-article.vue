<template>
	<view>
		<scroll-view class="tab-wrap" scroll-x="true" scroll-with-animation>
			<view 	v-for="(tab, i) in tabList" 
					:class="{active: i==activeIndex}" 
					:key="i" :id="tab.id"  
					@click="tabClick(i)"
					class="tab-list scroll-view-item">{{tab.text}}</view>
		</scroll-view>
		<article-list />
		<article-list />
		<article-list />
	</view>
</template>

<script>
import ArticleList from "@/comps/article-list"

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
		}
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
