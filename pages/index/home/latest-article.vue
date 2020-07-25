<template>
	<view>
		<scroll-view class="tab-wrap" scroll-x="true" scroll-with-animation>
			<view 	v-for="(tab, i) in tabList" 
					:class="{active: i==activeIndex}" 
					:key="i" :id="tab.id"  
					@click="tabClick(i)"
					class="tab-list scroll-view-item">{{tab.name}}</view>
		</scroll-view>
		<article-list v-for="(item, i) in listData" :listdata=item :key="i" />
	</view>
</template>

<script>
import ArticleList from "@/comps/list/article-list"
import { getNewsType, getNewsList } from "@/api"

export default {
	data() {
		return {
			tabList: [
				{ name: '最新文章', value: 'd1', listData: []},
				{ name: '摇号指南', value: 'd2'},
				{ name: '乐米问答', value: 'd3'},
				{ name: '乐米评盘', value: 'd4'},
				{ name: '乐米情报', value: 'd5'},
				{ name: '最新文章', value: 'd6'},
			],
			listData: [],
			activeIndex: 0
		};
	},
	methods: {
		tabClick(index) {
			this.activeIndex = index
			this.changeList()
		},
		getTypes() {
			getNewsType().then(data => {
				this.tabList = data
				this._getList()
			})
		},
		changeList() {
			let cur = this.tabList[this.activeIndex]
			
			this.listData = []
			
			if(!cur.listData) {
				this.pageNum = 1
				this._getList()
			}else{
				this.listData = cur.listData
			}
		},
		_getList() {
			let cur = this.tabList[this.activeIndex]
			let params = {
					pageNum: this.pageNum,
					pageSize: 3,
					type: cur.value
				}
			if(this.pageNum == 1) this.listData = []

			getNewsList(params).then(data => {
				let { record, totalNum, pageSize } = data
				this.listData = this.listData.concat(record)
				cur.listData = this.listData

				if(!this.maxPages) this.maxPages = Math.ceil(totalNum/pageSize)
			})
		},
		getMore() {
			if(this.pageNum < this.maxPages) {
				this.pageNum++
				this._getList()
			}
		}
	},
	
	created() {
		this.pageNum = 1
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
