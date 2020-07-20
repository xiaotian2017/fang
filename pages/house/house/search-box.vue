<template>
	<view class="layer" :class="{cut: !isShowDown}">
		<view class="search-box">
			<uni-icons class="search-icon" color="#999999" size="18" type="search" />
			<input class="search-input" :focus="true" :placeholder="placeHolder" v-model="query"  />
			<view class="confirm" @click="confirmSearch">确定</view>
			
			<text class="tip" v-if="isShowDown">温馨提示：可按照楼盘名称和楼盘拼音首字母搜索</text>
		</view>

		<template v-if="isShowDown">
			<banner :list="advList" height=130 />
			
			<view class="lastest-box" v-if="lastestList.length>0">
				<view class="sub-tit">最近在搜</view>
				<uni-icons @tap="clearAll" class="clear-icon" type="close" color="#666" size="14" />

				<view class="list-con">
					<view class="list" v-for="(item, i) in lastestList" @click="labelClick(item)" :key="i">
						{{item}}
					</view>
					<div class="clear"></div>
				</view> 
			</view>
			
			<view class="top-box">
				<view class="sub-tit">大家都在搜</view>
				<view class="list-con">
					<view class="list" v-for="(item, i) in hotList" @click="labelClick(item.name)" :key="i">
						{{item.name}}
					</view>
				</view> 
			</view>
		</template>
	</view>
</template>

<script>
import Banner from "@/comps/banner"
import SearchHistory from "./js/searchHistory"
import { getHotList } from "@/api"

export default {
	data() {
		return {
			advList : [],
			placeHolder: 'A楼盘',
			lastestList: SearchHistory.list,
			hotList: [],
			query: "",
			isShowDown: true,
			lastestVisible: true
		}
	},
	methods: {
		confirmSearch() {
			if(!this.query) {
				this.query = this.placeHolder
			}
			this.lastestList = []
			SearchHistory.add(this.query)
			this.lastestList = SearchHistory.list
			
			this.isShowDown = false
			this.$emit('confirmSearch', this.query)
		},
		clearAll() {
			this.lastestList = []
		},
		labelClick(item) {
			this.query = item
			this.confirmSearch()
		},
		_getHotList() {
			getHotList().then(data => {
				this.hotList = data
			})
		},
		_initData() {
			this.advList = [
				{ src: '../static/list/adv.png' }
			]
			this.hotList = [
				{ label: '楼盘名称top1' },
				{ label: '楼盘名称top2' },
				{ label: '楼盘名称top3' },
				{ label: '楼盘名称top4' },
				{ label: '楼盘名称top5' },
				{ label: '楼盘名称top6' },
				{ label: '楼盘名称top7' },
				{ label: '楼盘名称top8' },
			]
			this._getHotList()
		}
	},
	watch: {
		query(val) {
			if(!val) {
				this.isShowDown = true
			}
		}
	},
	created() {
		this._initData()

		this.$ADV_API.getSearch().then(data => {
			this.advList = data.adverts
			this.placeHolder = data.serachbar.projectName
		})
	},
	components: {
		Banner
	}
}
</script>

<style lang="scss">
.search-box{
	background: #eee; margin: 0 0 55rpx; height: 80rpx; position: relative;line-height: 80rpx;
	.search-input{
		padding: 15rpx 70rpx;
	}
	.search-icon{
		position: absolute; left: 20rpx; @include top-center;
	}
	.confirm{
		position: absolute; right: 30rpx; top:0; color: $theme; z-index: 10;
		&:after{
			content: ""; position: absolute; left: -20rpx; height: 30rpx; width: 2rpx; 
			background: $theme; @include top-center;
		}
	}
	.tip{
		position:absolute; top: 85rpx; line-height: 36rpx; color: #999; font-size: 24rpx;
	}
}
.layer{
	padding-top: 10rpx; position:fixed; top:0;width:calc(100% - 60rpx); height: 100%; left: 0; z-index: 10; 
	&.cut{
		height: 100rpx; min-height: auto; position: relative; 
	}
}
					
.lastest-box{
	position:relative;
	.clear-icon{
		position: absolute; top: 10rpx; right: 0rpx;
	}
}
.sub-tit{
	color: #999; margin: 30rpx 0;
}
.list-con{
	margin: 20rpx 0; 
	.list{
		padding: 0 20rpx; height:50rpx; line-height: 50rpx; color: #333;  margin: 0 8rpx 20rpx; background: #eee;
		border-radius: 25rpx; float:left;
	}
}
	
</style>
